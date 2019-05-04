import {Reducer} from "redux";
import {UserTypes,UserActionTypes} from "./userTypes";


export const initialState: UserTypes = {
    token: null,
    userId: null,
    isAuthenticated: false,
    userData: null
};

const reducer: Reducer<UserTypes> = (state = initialState, action) => {

    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isAuthenticated: true
            };
        case UserActionTypes.SET_ID:
            return {
                ...state,
                userId: action.userId,
                isAuthenticated: true
            };
        case UserActionTypes.PROFILE_RECEIVED:
            return {
                ...state,
                userData: (state.userId === action.userId && state.userData === null) ? action.userData : state.userData,
                isAuthenticated: (state.userId === action.userId && state.userData === null)
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                isAuthenticated: false,
                userData: null
            };
        default:
            return state;
    }
};

export {reducer as UserReducer}
