import {requests} from "../utils/agent";
import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_COMPLETE,
    USER_REGISTER_SUCCESS,
    USER_CONFIRMATION_SUCCESS,
    USER_SET_ID,
    USER_PROFILE_ERROR,
    USER_PROFILE_RECEIVED,
    USER_PROFILE_REQUEST,
} from "./constants";

import {SubmissionError} from "redux-form";

export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    }
};

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
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
        type: USER_REGISTER_COMPLETE
    }
};

export const userConfirmationSuccess = () => {
    return {
        type: USER_CONFIRMATION_SUCCESS
    }
};

export const userConfirm = (confirmationToken) => {
    return (dispatch) => {
        return requests.post('/users/confirm', {confirmationToken}, false)
            .then(() => dispatch(userConfirmationSuccess()))
            .catch(error => {
                throw new SubmissionError({
                    _error: 'Confirmation token is invalid'
                });
            });
    }
};


export const userSetId = (userId) => {
    return {
        type: USER_SET_ID,
        userId
    }
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
};

export const userRegisterSuccess = () => {
    return {
        type: USER_REGISTER_SUCCESS
    }
};

export const userRegister = (email, name, password, retypedPassword) => {
    return (dispatch) => {
        return requests.post('/users', {email, name, password, retypedPassword}, false)
            .then(() => dispatch(userRegisterSuccess()))
            .catch(error => {
                // throw new SubmissionError(parseApiErrors(error));
            });
    }
};


export const userProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST
    }
};

export const userProfileError = (userId) => {
    return {
        type: USER_PROFILE_ERROR,
        userId
    }
};

export const userProfileReceived = (userId, userData) => {
    return {
        type: USER_PROFILE_RECEIVED,
        userData,
        userId
    }
};

export const userProfileFetch = (userId) => {
    return (dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/users/${userId}`, true).then(
            response => dispatch(userProfileReceived(userId, response))
        ).catch(() => dispatch(userProfileError(userId)))
    }
};