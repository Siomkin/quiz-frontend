import {requests} from "../../utils/agent";
import {Dispatch} from "redux";


import {SubmissionError} from "redux-form";
import {UserActionTypes} from "./userTypes";

export const userLoginSuccess = (token: string, userId: number) => {
    return {
        type: UserActionTypes.LOGIN_SUCCESS,
        token,
        userId
    }
};

export const userLoginAttempt = (username: string, password: string) => {
    return (dispatch: Dispatch) => {
        return requests.post('/login_check', {username, password}, false).then(
            response => dispatch(userLoginSuccess(response.token, response.id))
        ).catch(() => {
            throw new SubmissionError({
                _error: 'Username or password is invalid'
            })
        });
    }
};

export const userRegisterComplete = () => {
    return {
        type: UserActionTypes.REGISTER_COMPLETE
    }
};

export const userConfirmationSuccess = () => {
    return {
        type: UserActionTypes.CONFIRMATION_SUCCESS
    }
};

export const userConfirm = (confirmationToken: string) => {
    return (dispatch: Dispatch) => {
        return requests.post('/users/confirm', {confirmationToken}, false)
            .then(() => dispatch(userConfirmationSuccess()))
            .catch(error => {
                throw new SubmissionError({
                    _error: 'Confirmation token is invalid'
                });
            });
    }
};

export const userSetId = (userId: number) => {
    return {
        type: UserActionTypes.SET_ID,
        userId
    }
};

export const userLogout = () => {
    return {
        type: UserActionTypes.LOGOUT
    }
};

export const userRegisterSuccess = () => {
    return {
        type: UserActionTypes.REGISTER_SUCCESS
    }
};

export const userRegister = (email: string, name: string, password: string, retypedPassword: string) => {
    return (dispatch: Dispatch) => {
        return requests.post('/users', {email, name, password, retypedPassword}, false)
            .then(() => dispatch(userRegisterSuccess()))
            .catch(error => {
                throw new SubmissionError(error);
            });
    }
};


export const userProfileRequest = () => {
    return {
        type: UserActionTypes.PROFILE_REQUEST
    }
};

export const userProfileError = (userId: number) => {
    return {
        type: UserActionTypes.PROFILE_ERROR,
        userId
    }
};

export const userProfileReceived = (userId: number, userData: object) => {
    return {
        type: UserActionTypes.PROFILE_RECEIVED,
        userData,
        userId
    }
};

export const userProfileFetch = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/users/${userId}`, true).then(
            response => dispatch(userProfileReceived(userId, response))
        ).catch(() => dispatch(userProfileError(userId)))
    }
};