import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(manageUsers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
