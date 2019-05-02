import {requests} from "../utils/agent";

import {
    QUIZ_PROCESS_REQUEST, QUIZ_PROCESS_ERROR, QUIZ_PROCESS_RECEIVED
} from "./constants";


export const quizProcessRequest = () => ({
    type: QUIZ_PROCESS_REQUEST,
});

export const quizProcessError = (error) => ({
    type: QUIZ_PROCESS_ERROR,
    error
});

export const quizProcessReceived = (data) =>
    ({
        type: QUIZ_PROCESS_RECEIVED,
        data
    });

export const quizProcess = (id) => {
    return (dispatch) => {
        dispatch(quizProcessRequest());
        return requests.get(`/quiz/${id}/process`, true)
            .then(
                response => dispatch(quizProcessReceived(response))
            )
            .catch(error => dispatch(quizProcessError(error)));
    }
};





