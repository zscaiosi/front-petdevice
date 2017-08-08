import axios from 'axios';

const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

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
