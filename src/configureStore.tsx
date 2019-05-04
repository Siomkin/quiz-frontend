import {Store, createStore, applyMiddleware} from 'redux'

import {routerMiddleware} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createHashHistory, History} from 'history'

import {ApplicationState, createRootReducer} from './store'
import {tokenMiddleware} from "./middleware";
import thunk from "redux-thunk";

export const history = createHashHistory();

export default function configureStore(
    history: History,
    initialState: ApplicationState
): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});

    return createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(thunk, routerMiddleware(history), tokenMiddleware))
    )
}