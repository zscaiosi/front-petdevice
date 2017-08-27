import {combineReducers} from 'redux';
import {login} from './loginReducer';
import {device} from './deviceReducer';

const wholeState = combineReducers({
  login,
  device
});

export default wholeState;