import axios from 'axios';
import { useDispatch } from 'react-redux';
import { get_api_data } from '../store/action.js';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
export const Todo = () =>
{
    const dispatch = useDispatch();
    const handletodos = (payload) =>
    {
        axios.post("http://localhost:3001/todos", payload).then((res) => {
            dispatch(get_api_data());
        }).catch((err) =>
        {
            alert(err.message);
        })
    };
    return <><h3>Add Todo List</h3>
        <TodoInput handletodos={handletodos} />
        <TodoList/>
    </>
}