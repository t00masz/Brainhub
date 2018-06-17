import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import { sendUserData } from '../actions/send-data';
import { changeUserData } from '../actions/user-actions';

const reactApp = (props) => {
    let userData = props.state.user 
    console.log(userData.error, 'reactapp errors')
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(sendUserData({name: userData.name, lastName: userData.lastName, email: userData.email, date: userData.date}))
        }}>
            <h1 className='header0'>Simple REST API</h1>
            <div className='conteiner0'> 
            <legend className='label0'>Personal data</legend>
            <p>
            <input name='name' className='inputT0' type='text' placeholder='Your first name (required)' value = { userData.name } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: e.target.value, lastName: userData.lastName, email: userData.email, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel1' className='labelE0'> { userData.error.name } </label>
            </p>
            <p>
            <input name='lastName' className='inputT1' type='text' placeholder='Your last name (required)' value = { userData.lastName } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: e.target.value, email: userData.email, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel2' className='labelE1' > { userData.error.lastName } </label>
            </p>
            <p>
            <input name='email' className='inputT2' type='text' placeholder='Your e-mail address (required)' value = { userData.email } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: userData.lastName, email: e.target.value, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel3' className='labelE2' > { userData.error.email } </label>
            </p>
            </div>
            <div className='conteiner1'> 
            <legend className='label0'>Event date</legend>
            <p>
            <input name='date' className='inputD0' type='date' valueAsNumber value = { userData.date } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: userData.lastName, email: userData.email, date: e.target.value, error: userData.error}))
            }}/>

            <label name='errorLabel4' className='labelE3' > { userData.error.date } </label>
            </p>
            <p>
            <input className='button0' type='submit' value="Send data!"/>
            </p>
            </div>  
        </form>
    );
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        state
    }
};

const appContainer = connect(mapStateToProps) (reactApp);

export default appContainer;