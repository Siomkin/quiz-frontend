import {requests} from "../utils/agent";

import {
    QUIZ_PASSING_START_REQUEST,
    QUIZ_PASSING_START_ERROR,
    QUIZ_PASSING_START_RECEIVED,
    QUIZ_PASSING_START_UNLOAD
} from "./constants";
import {Dispatch} from "redux";


export const quizPassingStartRequest = () => ({
    type: QUIZ_PASSING_START_REQUEST,
});

export const quizPassingStartError = (error: string) => ({
    type: QUIZ_PASSING_START_ERROR,
    error
});

export const quizPassingStartReceived = (data: object) =>
    ({
        type: QUIZ_PASSING_START_RECEIVED,
        data
    });

export const quizPassingStart = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(quizPassingStartRequest());
        return requests.put(`/quiz/${id}/passing_start`, {}, true)
            .then(
                response => dispatch(quizPassingStartReceived(response))
            )
            .catch(error => dispatch(quizPassingStartError(error)));
    }
};
export const quizPassingStartUnload = () => ({
    type: QUIZ_PASSING_START_UNLOAD,
});




