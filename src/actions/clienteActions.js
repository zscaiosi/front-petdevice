import axios from 'axios';
import {api} from '../config.json';

export const POST_CLIENTE = 'POST_CLIENTE';
export const POST_CLIENTE_SUCCESS = 'POST_CLIENTE_SUCCESS';
export const POST_CLIENTE_ERROR = 'POST_CLIENTE_ERROR';

export const GET_CLIENTE = 'GET_CLIENTE';
export const GET_CLIENTE_SUCCESS = 'GET_CLIENTE_SUCCESS';
export const GET_CLIENTE_ERROR = 'GET_CLIENTE_ERROR';

const postCliente = () => {
  return {
    type: POST_CLIENTE
  }
}

const postClienteSuccess = (response) => {
  return {
    type: POST_CLIENTE_SUCCESS,
    response
  }
}

const postClienteError = (error) => {
  return {
    type: POST_CLIENTE_ERROR,
    error
  }
}

export const postClienteRequest = (payload) => {
  const instance = axios.create({
      'Content-Type': 'application/x-www-form-urlencoded'
  });

  const request = instance.post(api.url, payload);

  return dispatch => {
    dispatch(postCliente());

    return request.then( (response) => {
      dispatch(postClienteSuccess(response));
      console.log("Cliente POST:", response);
    }).catch( (error) => {
      dispatch(postClienteError(error));
      console.log("Cliente POST ERROR:", error);
    });
  }
}

const getCliente = () => {
  return {
    type: GET_CLIENTE
  }
}

const getClienteSuccess = (response) => {
  return {
    type: GET_CLIENTE_SUCCESS,
    response
  }
}

const getClienteError = (error) => {
  return {
    type: GET_CLIENTE_ERROR,
    error
  }
}

export const getClienteRequest = (params) => {
  const instance = axios.create({
    headers: {
      'Content-Type':'application/json'
    }
  });
  
}