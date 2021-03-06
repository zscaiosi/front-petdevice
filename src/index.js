import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Base from './Base';
import {createStore, applyMiddleware} from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import './style/bootstrap.css';
import './style/font-awesome/css/font-awesome.min.css';
import './style/index.css';

const persistingState = loadState();

const store = createStore(wholeState, persistingState,
  composeWithDevTools( applyMiddleware(thunkMiddleware) )
);

store.subscribe( () => {
  //console.log("getState", store.getState());
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-fluid">
          <Route path="/" component={Base} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
