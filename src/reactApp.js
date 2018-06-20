import React, { Component } from 'react';

import { connect } from "react-redux";

import { sendUserData } from '../actions/send-data';
import { changeUserData } from '../actions/user-actions';

const reactApp = (props) => {
    let userData = props.state.user 
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(sendUserData({name: userData.name, lastName: userData.lastName, email: userData.email, date: userData.date}))
        }}>
            <h1 className='main-header'>Simple REST API</h1>
            <div className='user-container'> 
            <legend className='user-container__label'>Personal data</legend>
            <p>
            <input name='name' className='user-container__name-input' type='text' placeholder='Your first name (required)' value = { userData.name } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: e.target.value, lastName: userData.lastName, email: userData.email, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel1' className='user-container__name-error'> { userData.error.name } </label>
            </p>
            <p>
            <input name='lastName' className='user-container__lastName-input' type='text' placeholder='Your last name (required)' value = { userData.lastName } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: e.target.value, email: userData.email, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel2' className='user-container__lastName-error' > { userData.error.lastName } </label>
            </p>
            <p>
            <input name='email' className='user-container__email-input' type='text' placeholder='Your e-mail address (required)' value = { userData.email } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: userData.lastName, email: e.target.value, date: userData.date, error: userData.error}))
            }}/>

            <label name='errorLabel3' className='user-container__email-error' > { userData.error.email } </label>
            </p>
            </div>
            <div className='.date-container'> 
            <legend className='date-container__label'>Event date</legend>
            <p>
            <input name='date' className='date-container__date-input' type='date' valueAsNumber value = { userData.date } onChange = {(e) => {
                e.preventDefault();
                props.dispatch(changeUserData({name: userData.name, lastName: userData.lastName, email: userData.email, date: e.target.value, error: userData.error}))
            }}/>

            <label name='errorLabel4' className='date-container__date-error' > { userData.error.date } </label>
            </p>
            <p>
            <input className='date-container_button-submit' type='submit' value="Send data!"/>
            </p>
            </div>  
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const appContainer = connect(mapStateToProps) (reactApp);

export default appContainer;