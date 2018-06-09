import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateUser } from '../actions/user-actions';
import errors from './validateData'
import today from './getDate'

class reactApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastName: '',
            email: '',
            date: today(),
            error: {name: '', lastName: '', email: '', date: ''}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser (event) {
        this.props.onUpdateUser(event.target.value)
    }

    handleChange = (e) => {
        e.preventDefault();
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let checkForErrors = errors({name: this.state.name, lastName: this.state.lastName, email: this.state.email, date: this.state.date})

        if (checkForErrors.name === '' && checkForErrors.lastName === '' && checkForErrors.email === '' && checkForErrors.date === ''){
            fetch('http://localhost:5000/persons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    date: this.state.date
                }),
                }).then(res => res.json())

            this.setState({
                name: '',
                lastName: '',
                email: '',
                date: today(),
                error: {name: '', lastName: '', email: '', date: ''}
            })
        }
        else {
            this.setState({
                error: {name: checkForErrors.name, lastName: checkForErrors.lastName, email: checkForErrors.email, date: checkForErrors.date}
            })
            console.log(checkForErrors)

        }
    }
      
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1 className='header0'>Simple REST API</h1>
                <div className='conteiner0'> 
                <legend className='label0'>Personal data</legend>
                <p>
                <input name='name' className='inputT0' type='text' placeholder='Your first name (required)' onChange={this.handleChange} value={this.state.name} />
                <label name='errorLabel1' className='labelE0'> {this.state.error.name} </label>
                </p>
                <p>
                <input name='lastName' className='inputT1' type='text' placeholder='Your last name (required)' onChange={this.handleChange} value={this.state.lastName} />
                <label name='errorLabel2' className='labelE1' >{this.state.error.lastName}</label>
                </p>
                <p>
                <input name='email' className='inputT2' type='text' placeholder='Your e-mail address (required)' onChange={this.handleChange} value={this.state.email} />
                <label name='errorLabel3' className='labelE2' >{this.state.error.email}</label>
                </p>
                </div>
                <div className='conteiner1'> 
                <legend className='label0'>Event date</legend>
                <p>
                <input name='date' className='inputD0' type='date' valueAsNumber onChange={this.handleChange} value={this.state.date}/>
                <label name='errorLabel4' className='labelE3' >{this.state.error.date}</label>
                </p>
                <p>
                <input className='button0' type='submit' value="Send data!"/>
                </p>
                </div>  
            </form>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(props)
    return {
    name: state.name,
    lastName: state.lastName,
    email: state.email,
    products: state.products,
    user: state.user
    }
};

const mapActionsToProps = {
    onUpdateUser: updateUser,
};

const appContainer = connect(mapStateToProps, mapActionsToProps) (reactApp);
export default appContainer;