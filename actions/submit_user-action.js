export const SUBMIT_USER = 'users:ubmitUsers';

export function submitUser(newUser) {
    return {
        type: SUBMIT_USER,
        payload: {
            user: newUser
        }
    }
}