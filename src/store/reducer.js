import {  GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILURE} from "./actionType.js";
const initState = { todo: [], isErr: false, isLoading: false,err:"" };
export const Reducer = (state = initState, { type, payload }) =>
{
    switch (type)
    {
        case GET_TODOS_REQUEST:
                            return { ...state, isLoading: true };
        case GET_TODOS_SUCCESS:
                            return { ...state, isLoading: false, todo: [...payload] };
        case GET_TODOS_FAILURE:
                            return { ...state, isLoading: false,isErr: true,err:payload};
        default: return state;
    }  
}