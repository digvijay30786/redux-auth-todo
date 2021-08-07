import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {get_api_data } from '../store/action.js';
export const TodoList = () =>
{
    const { isErr, isLoading, todo,err} = useSelector((state) => state.todosList);
    const dispatch = useDispatch();
    useEffect(() => { dispatch(get_api_data()) }, []);
    return isLoading ? (<h1>Loading...</h1>) : isErr ? (<h1>{err}</h1>) : (todo.map((e) => { return <h3>title : {e.title} , status : { String(e.status)}</h3>}))
 
    return <h1>as</h1>
}