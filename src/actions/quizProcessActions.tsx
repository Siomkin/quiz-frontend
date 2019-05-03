import {requests} from "../utils/agent";
import {Dispatch} from "redux";

import {
    QUIZ_PROCESS_REQUEST, QUIZ_PROCESS_ERROR, QUIZ_PROCESS_RECEIVED
} from "./constants";


export const quizProcessRequest = () => ({
    type: QUIZ_PROCESS_REQUEST,
});

export const quizProcessError = (error: object) => ({
    type: QUIZ_PROCESS_ERROR,
    error
});

export const quizProcessReceived = (data: object) =>
    ({
        type: QUIZ_PROCESS_RECEIVED,
        data
    });

export const quizProcess = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(quizProcessRequest());
        return requests.get(`/quiz/${id}/process`, true)
            .then(
                response => dispatch(quizProcessReceived(response))
            )
            .catch(error => dispatch(quizProcessError(error)));
    }
};





