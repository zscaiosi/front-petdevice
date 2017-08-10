import axios from 'axios';
import {localApi} from '../config.json';

export const GET_DEVICE = 'GET_DEVICE';
export const GET_DEVICE_SUCCESS = 'GET_DEVICE_SUCCESS';
export const GET_DEVICE_ERROR = 'GET_DEVICE_ERROR';

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
      dispatch(error);
    });
  }
}