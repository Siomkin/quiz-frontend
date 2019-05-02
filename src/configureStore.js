import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './reducer'
import thunk from "redux-thunk";
import {tokenMiddleware} from "./middleware";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history), // for dispatching history actions
                tokenMiddleware,
            ),
        )
    )
}