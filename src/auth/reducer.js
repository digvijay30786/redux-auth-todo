import {AUTH_REQUEST,AUTH_SUCCESS,AUTH_FALIURE} from '../auth/actionType.js';
import { getLocalToken } from '../components/LocalData.js';
const initState = { token: getLocalToken()||"", isLoading: false, isErr: false,isAuth:false };
export const AuthReducer = (state = initState, { type, payload }) => {
    
    switch(type)
    {
        case AUTH_REQUEST:
            return {...state,isLoading:true};
        case AUTH_FALIURE:
            return { ...state, isLoading: false, isErr: true , err:payload };
        case AUTH_SUCCESS:
            return {...state,isLoading:false,isErr:false,isAuth:true};
        default: return state;

    }
    
}