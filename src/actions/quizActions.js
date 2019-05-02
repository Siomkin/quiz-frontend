import {requests} from "../utils/agent";

import {
    QUIZ_LIST_ERROR,
    QUIZ_LIST_RECEIVED,
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SET_PAGE,
    QUIZ_RECEIVED,
    QUIZ_REQUEST,
    QUIZ_UNLOAD,
    QUIZ_ERROR
} from "./constants";


export const quizListRequest = () => ({
    type: QUIZ_LIST_REQUEST,
});

export const quizListError = (error) => ({
    type: QUIZ_LIST_ERROR,
    error
});

export const quizListReceived = (data) => ({
    type: QUIZ_LIST_RECEIVED,
    data
});

export const quizListSetPage = (page) => ({
    type: QUIZ_LIST_SET_PAGE,
    page
});

export const quizListFetch = (page = 1) => {
    return (dispatch) => {
        dispatch(quizListRequest());
        return requests.get(`/quizzes?_page=${page}`)
            .then(response => dispatch(quizListReceived(response)))
            .catch(error => dispatch(quizListError(error)));
    }
};

// Single quiz
export const quizRequest = () => ({
    type: QUIZ_REQUEST,
});

export const quizError = (error) => ({
    type: QUIZ_ERROR,
    error
});

export const quizReceived = (data) => ({
    type: QUIZ_RECEIVED,
    data
});


export const quizFetch = (id) => {
    return (dispatch) => {
        dispatch(quizRequest());
        return requests.get(`/quizzes/${id}`)
            .then(response => dispatch(quizReceived(response)))
            .catch(error => dispatch(quizError(error)));
    }
};

export const quizUnload = () => ({
    type: QUIZ_UNLOAD,
});