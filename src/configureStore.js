import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './reducer'
import thunk from "redux-thunk";
import {tokenMiddleware} from "./middleware";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history), // for dispatching history actions
                tokenMiddleware,
            ),
        ),
    );

    return store
}