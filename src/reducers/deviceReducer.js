import {
  GET_DEVICE,
  GET_DEVICE_SUCCESS,
  GET_DEVICE_ERROR,
  GET_PET,
  GET_PET_SUCCESS,
  GET_PET_ERROR,
  GET_DIET,
  GET_DIET_SUCCESS,
  GET_DIET_ERROR
} from '../actions/deviceActions';

const STATE_DEVICE = {
  isGettingDevice: false,
  getDeviceSuccess: null,
  getDeviceError: null,
  //pet
  isGettingPet: false,
  getPetSuccess: null,
  getPetError: null,
  //diet
  isGettingDiet: false,
  getDietSuccess: null,
  getDietError: null
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
    case GET_PET:
      return {
        ...state,
        isGettingPet: true,
        getPetSuccess: null,
        getPetError: null
      }      
    case GET_PET_SUCCESS:
      return {
        ...state,
        isGettingPet: false,
        getPetSuccess: action.response.data,
        getPetError: null
      }
    case GET_PET_ERROR:
      return {
        ...state,
        isGettingPet: false,
        getPetSuccess: null,
        getPetError: action.error
      }   
    case GET_DIET:
      return {
        ...state,
        isGettingDiet: true,
        getDietSuccess: null,
        getDietError: null
      }
    case GET_DIET_SUCCESS:
      return {
        ...state,
        isGettingDiet: false,
        getDietSuccess: action.response.data,
        getDietError: null
      }
    case GET_DIET_ERROR:
      return {
        ...state,
        isGettingDiet: false,
        getDietSuccess: null,
        getDietError: action.error
      }
    default:
      return {
        ...state
      }
  }
}