import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocalToken } from './LocalData.js';
import {auth_success,auth_request,auth_failure} from '../auth/action.js';
import { Redirect } from "react-router";
import { getLocalToken } from './LocalData.js';
export const Login = () => {
    const style = {
        margin: '20px',
        padding: '20px',
        boxSizing:'border-box'
    }
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();
    const {token,isLoading,isErr,err,isAuth} = useSelector((state) => state.auth);
    console.log(token, isLoading, isErr, err);
    const [tokenval, setToken] = useState(false);
    const handleLogin = () =>
    {
        dispatch(auth_request());
        const payload = { email:"eve.holt@reqres.in", password: "cityslicka" };
        axios.post("https://reqres.in/api/login", payload).then(({ data }) => {
            setLocalToken(data.token);
            dispatch(auth_success());
        }).catch((err) =>
        {
            dispatch(auth_failure(err.message));
        })
    };

    useEffect(() => { setToken(getLocalToken()) },[]);
    return isLoading ? <h3>Loading...</h3> : isErr ? <h3>{err}</h3>:isAuth || tokenval?<Redirect to='/todos'/>:(<div style={{width:'70%',margin:'auto'}}>
        <h3>Login</h3>
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email Address" style={style } />
        <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password" style={style }/>
        <button style={style} onClick={handleLogin}>Login</button>
    </div>);
}