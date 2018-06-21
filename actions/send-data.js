import * as types from './action-types';
import errors from '../src/validateData'
import today from '../src/getDate'
const fetch = require('node-fetch') // needed for tests

export const sendUserData = (payload = {}) => {
    let checkForErrors = errors({ name: payload.name, lastName: payload.lastName, email: payload.email, date: payload.date });
    
    if (checkForErrors.name === '' && checkForErrors.lastName === '' && checkForErrors.email === '' && checkForErrors.date === ''){
        fetch('http://localhost:5000/persons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                name: payload.name,
                lastName: payload.lastName,
                email: payload.email,
                date: payload.date,
            }),
        }).then(res => res.json()).catch((error) => {
            alert('Database is not connected!');
          });;
            return({
                type: types.SEND_USER_DATA, 
                user: {
                name: '',
                lastName: '',
                email: '',
                date: today(),
                error: {
                    name: '', 
                    lastName: '',
                    email: '', 
                    date: ''
                }
                }
            })
        }
    else {
        return({
            type: types.SEND_USER_DATA, 
            user: {
                name: payload.name,
                lastName: payload.lastName,
                email: payload.email,
                date: payload.date,
                error: {
                    name: checkForErrors.name, 
                    lastName: checkForErrors.lastName, 
                    email: checkForErrors.email, 
                    date: checkForErrors.date
                }
            }
        })
    }
};