import { createStore, applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from "./reducer.js";
import { AuthReducer } from '../auth/reducer.js';

const rootReducer = combineReducers(
    {
        "todosList": Reducer,
        "auth":AuthReducer
    });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));