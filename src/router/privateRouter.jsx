import { getLocalToken } from '../components/LocalData.js';
import { Redirect, Route} from "react-router-dom"; 
export const PrivateRouter = ({ path, children }) =>
{
    return getLocalToken() ? <Route exact path={path}>{children}</Route>:<Redirect to='/'/>
}