import {  GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILURE} from "./actionType.js";
import axios from 'axios';
export const get_todo_request = () => {
    return { type: GET_TODOS_REQUEST };
}

export const get_todo_success = (payload) => {
    return { type: GET_TODOS_SUCCESS, payload };
}


export const get_todo_failure = (payload) =>
{
    return { type: GET_TODOS_FAILURE, payload } ;
}


export const get_api_data = () =>
{
    return (dispatch) =>
    {
        dispatch(get_todo_request());
        axios("http://localhost:3001/todos").then(({data}) =>
        {
          dispatch(get_todo_success(data));
        }).catch((err) =>
        {
            dispatch(get_todo_failure(err.message));
      })   
    }
}



