import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from 'redux';
import userReducer from '../reducers/user-reducer';
import { sendUserData } from '../actions/user-actions';

import AppContainer from './reactApp'

let store = createStore(userReducer);

ReactDOM.render(
  <Provider store = { store }>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
);
