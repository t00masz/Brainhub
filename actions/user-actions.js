import * as types from './action-types';

export const changeUserData = (payload = {}) => {
	return({
		type: types.CHANGE_USER_DATA, 
		user: payload
	})
};