import {
  GET_DEVICE,
  GET_DEVICE_SUCCESS,
  GET_DEVICE_ERROR
} from '../actions/deviceActions';

const STATE_DEVICE = {
  isGettingDevice: false,
  getDeviceSuccess: null,
  getDeviceError: null
}

export const device = (state = STATE_DEVICE, action) => {
  switch(action.type){
    case GET_DEVICE:
      return {
        ...state,
        isGettingDevice: true,
        getDeviceSuccess: null,
        getDeviceError: null
      }
    case GET_DEVICE_SUCCESS:
      return {
        ...state,
        isGettingDevice: false,
        getDeviceSuccess: action.response.data,
        getDeviceError: null
      }
    case GET_DEVICE_ERROR:
      return {
        ...state,
        isGettingDevice: false,
        getDeviceSuccess: null,
        getDeviceError: action.error
      }
    default:
      return {
        ...state
      }
  }
}