import {requests} from "../utils/agent";

import {
    QUIZ_PASSING_LIST_ERROR,
    QUIZ_PASSING_LIST_RECEIVED,
    QUIZ_PASSING_LIST_REQUEST,
    QUIZ_PASSING_LIST_UNLOAD,

} from "./constants";


export const quizPassingListRequest = () => ({
    type: QUIZ_PASSING_LIST_REQUEST,
});

export const quizPassingListError = (error) => ({
    type: QUIZ_PASSING_LIST_ERROR,
    error
});

export const quizPassingListReceived = (data) => ({
    type: QUIZ_PASSING_LIST_RECEIVED,
    data
});

export const quizPassingListFetch = (quiz, page = 1) => {
    return (dispatch) => {
        dispatch(quizPassingListRequest());
        return requests.get(`/quiz/${quiz}/passing_list?_page=${page}`, true)
            .then(response => dispatch(quizPassingListReceived(response)))
            .catch(error => dispatch(quizPassingListError(error)));
    }
};
export const quizPassingListUnload = () => ({
    type: QUIZ_PASSING_LIST_UNLOAD,
});