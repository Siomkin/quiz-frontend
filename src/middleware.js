import {UserActionTypes} from "./store/user/userTypes";
import {requests} from "./utils/agent";
import {userLogout} from "./store/user/userActions";

export const tokenMiddleware = store => next => action => {
    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('userId', action.userId);
            requests.setToken(action.token);
            break;
        case UserActionTypes.LOGOUT:
            window.localStorage.removeItem('jwtToken');
            window.localStorage.removeItem('userId');
            requests.setToken(null);
            break;
        case UserActionTypes.PROFILE_ERROR:
            const state = store.getState().auth;
            if (state.userId === action.userId && state.userData === null) {
                store.dispatch(userLogout());
            }
            break;
        default:
    }
    next(action);
};