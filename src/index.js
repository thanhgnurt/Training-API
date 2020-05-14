import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'jquery/dist/jquery.min.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers/index';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'


const store = createStore(
  myReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
