import axios from 'axios';
import {localApi} from '../config.json';

export const GET_DEVICE = 'GET_DEVICE';
export const GET_DEVICE_SUCCESS = 'GET_DEVICE_SUCCESS';
export const GET_DEVICE_ERROR = 'GET_DEVICE_ERROR';
//Pet actions
export const GET_PET = 'GET_PET';
export const GET_PET_SUCCESS = 'GET_PET_SUCCESS';
export const GET_PET_ERROR = 'GET_PET_ERROR';
//Dieta actions
export const GET_DIET = 'GET_DIET';
export const GET_DIET_SUCCESS = 'GET_DIET_SUCCESS';
export const GET_DIET_ERROR = 'GET_DIET_ERROR';


const getDevice = () => {
  return {
    type: GET_DEVICE
  }
}

const getDeviceSuccess = (response) => {
  return {
    type: GET_DEVICE_SUCCESS,
    response
  }
}

const getDeviceError = (error) => {
  return {
    type: GET_DEVICE_ERROR,
    error
  }
}

export const getDeviceRequest = (device) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }
  });

  const request = instance.get(`${localApi.url}/devices/procurar?_id=${device}`);

  return dispatch => {
    dispatch(getDevice());

    return request.then( (response) => {
      dispatch(getDeviceSuccess(response));
    }).catch( (error) => {
      dispatch(getDeviceError(error));
    });
  }
}

const getPet = () => {
  return {
    type: GET_PET
  }
}

const getPetSuccess = (response) => {
  return {
    type: GET_PET_SUCCESS,
    response
  }
}

const getPetError = (error) => {
  return {
    type: GET_PET_ERROR,
    error
  }
}

export const getPetRequest = (device) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }
  });

  const request = instance.get(`${localApi.url}/pets/procurar/deviceAssociado?device_id=${device}`);

  return dispatch => {
    dispatch(getPet());

    return request.then( (response) => {
      dispatch(getPetSuccess(response));
    }).catch( (error) => {
      dispatch(getPetError(error));
    });
  }
}

const getDiet = () => {
  return {
    type: GET_DIET
  }
}

const getDietSuccess = (response) => {
  return {
    type: GET_DIET_SUCCESS,
    response
  }
}

const getDietError = (error) => {
  return {
    type: GET_DIET_ERROR,
    error
  }
}

export const getDietRequest = (device) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }
  });

  const request = instance.get(`${localApi.url}/dietas/procurar?device_id=${device}`);

  return dispatch => {
    dispatch(getDiet());

    return request.then( (response) => {
      dispatch(getDietSuccess(response));
    }).catch( (error) => {
      dispatch(getDietError(error));
    });
  }  
}