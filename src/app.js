// import { store } from "../store/store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
// import { sendData } from "../actions/index";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//import { sendData } from '../selectors/sendData'

import  productsReducer from '../reducers/products-reducer'
import  userReducer from '../reducers/user-reducer'

import productsAction from '../reducers/products-reducer'
import { updateUser } from '../reducers/user-reducer'


import { combineReducers, createStore } from 'redux';

import AppContainer from './reactApp'


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(
  allReducers, {
  products: [{ name: 'iPhone'}],
  user: 'Michael'
});


// const mapStateToProps = (state) => {
//   return {
//     firstName: sendData(state.firstName),
//     lastName: sendData(state.lastName)
//   };
// };

// const mapDispatchToProps = { sendData };
  
// const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ReactForm)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
);
