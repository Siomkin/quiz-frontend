import {requests} from "../../utils/agent";

import {Dispatch} from "redux";
import {QuizListActionTypes} from "./quizListTypes";


export const quizListRequest = () => ({
    type: QuizListActionTypes.FETCH_REQUEST
});


export const quizListError = (error: object) => ({
    type: QuizListActionTypes.FETCH_ERROR,
    error
});

export const quizListReceived = (data: object) => ({
    type: QuizListActionTypes.FETCH_RECEIVED,
    data
});

export const quizListSetPage = (page: number) => ({
    type: QuizListActionTypes.SET_PAGE,
    page
});

export const quizListFetch = (page: number = 1) => {
    return (dispatch: Dispatch) => {
        dispatch(quizListRequest());
        return requests.get(`/quizzes?_page=${page}`)
            .then(response => dispatch(quizListReceived(response)))
            .catch(error => dispatch(quizListError(error)));
    }
};
