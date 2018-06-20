import * as types from '../actions/action-types';
import today from '../src/getDate'

const initialState = 
{
    user: {
        name: '',
        lastName: '',
        email: '',
        date: today(),
        error: {name: '', lastName: '', email: '', date: ''}
    }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_USER_DATA:
            return {
                user: {
                    name: action.user.name,
                    lastName: action.user.lastName,
                    email: action.user.email,
                    date: action.user.date,
                    error: {
                        name: action.user.error.name, 
                        lastName: action.user.error.lastName, 
                        email: action.user.error.email, 
                        date: action.user.error.date
                    }
                }
            }
        case types.SEND_USER_DATA:
        return {
            user: {
                name: action.user.name,
                lastName: action.user.lastName,
                email: action.user.email,
                date: action.user.date,
                error: {
                    name: action.user.error.name, 
                    lastName: action.user.error.lastName, 
                    email: action.user.error.email, 
                    date: action.user.error.date
                }
            }
        }
        default:
        return state;
    }
}