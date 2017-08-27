import axios from 'axios';
import {localApi, awsApi} from '../config.json';
//get user
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
//Login
export const POST_LOGIN = "POST_LOGIN";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

//Actions creators para o login. Ver documentação react-redux

const getUser = () => {
  return {
    type: GET_USER
  }
}

const getUserSuccess = (response) => {
  return {
    type: GET_USER_SUCCESS,
    //key = value então apenas uma vez
    response
  }
}

const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    error
  }
}

export const getUserRequest = (id) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }
  });

  const request = instance.get(`${awsApi.url}/clientes/procurar?_id=${id}`);

  return dispatch => {
    dispatch(getUser());

    return request.then( (response) => {
      console.log("GET USER S", response);
      dispatch(getUserSuccess(response));
    }).catch( (err) => {
      console.log("GET USER ERR", err);
      dispatch(getUserError(err));
    });
  }
}

const postLogin = () => {
  return {
    type: POST_LOGIN
  }
}

const postLoginSuccess = (response) => {
  return {
    type: POST_LOGIN_SUCCESS,
    response
  }
}

const postLoginError = (error) => {
  return {
    type: POST_LOGIN_ERROR,
    error
  }
}

export const postLoginRequest = (payload) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }    
  });

  const request = instance.post(`${awsApi.url}/clientes/login`, payload);

  return dispatch => {
    dispatch(postLogin());

    return request.then( (response) => {
      console.log("POST LOGIN SUCCESS", response);
      dispatch(postLoginSuccess(response));
    }).catch( (error) => {
      console.log("POST LOGIN ERR", error);
      dispatch(postLoginError(error));
    });
  }
}