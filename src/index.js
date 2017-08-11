import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Base from './Base';
import {createStore, applyMiddleware} from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/header/HeaderComponent';

const store = createStore(wholeState, 
  composeWithDevTools( applyMiddleware(thunkMiddleware) )
);

store.subscribe( () => {
  console.log("getState", store.getState())
  localStorage.setItem('login', JSON.stringify(store.getState().login.postLoginSuccess));
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Route path="/" component={Base} />   
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
