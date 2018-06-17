import * as types from './action-types';
import errors from '../src/validateData'

export const changeUserData = (payload = {}) => {
  console.log(payload, 'errors')
  return({
    type: types.CHANGE_USER_DATA, 
    user: payload
  })
};