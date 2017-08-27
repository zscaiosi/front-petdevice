import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR
} from '../actions/loginActions';

const LOGIN_STATE = {
  isGettingUser: false,
  getUserSuccess: null,
  getUserError: null,

  isPostingLogin: false,
  postLoginSuccess: null,
  postLoginError: null
}

export const login = (state = LOGIN_STATE, action) => {
  switch(action.type){
    case GET_USER:
      return {
        ...state,
        isGettingUser: true,
        getUserSuccess: null,
        getUserError: null  
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        getUserSuccess: action.response.data,
        getUserError: null  
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isGettingUser: false,
        getUserSuccess: null,
        getUserError: action.error  
      }
    case POST_LOGIN:
      return {
        ...state,
        isPostingLogin: true,
        postLoginSuccess: null,
        postLoginError: null        
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isPostingLogin: false,
        postLoginSuccess: action.response.data,
        postLoginError: null        
      }
    case POST_LOGIN_ERROR:
      return {
        ...state,
        isPostingLogin: false,
        postLoginSuccess: null,
        postLoginError: action.error        
      }            
    default:
      return {
        ...state
      }    
  }
}