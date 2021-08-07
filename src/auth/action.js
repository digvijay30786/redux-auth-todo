import {AUTH_REQUEST,AUTH_SUCCESS,AUTH_FALIURE} from './actionType.js'
export const auth_request = () => {
    return {type:AUTH_REQUEST};
}

export const auth_success = () => {
    return { type: AUTH_SUCCESS };
}

export const auth_failure = (payload) => {
    return { type: AUTH_FALIURE, payload };
}