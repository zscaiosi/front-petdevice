import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Base from './Base';
import {createStore, applyMiddleware} from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(wholeState, 
  composeWithDevTools( applyMiddleware(thunkMiddleware) )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
