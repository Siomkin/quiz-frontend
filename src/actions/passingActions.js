import {requests} from "../utils/agent";

import {
    QUIZ_PASSING_START_REQUEST,
    QUIZ_PASSING_START_ERROR,
    QUIZ_PASSING_START_RECEIVED,
    QUIZ_PASSING_START_UNLOAD
} from "./constants";


export const quizPassingStartRequest = () => ({
    type: QUIZ_PASSING_START_REQUEST,
});

export const quizPassingStartError = (error) => ({
    type: QUIZ_PASSING_START_ERROR,
    error
});

export const quizPassingStartReceived = (data) =>
    ({
        type: QUIZ_PASSING_START_RECEIVED,
        data
    });

export const quizPassingStart = (id) => {
    return (dispatch) => {
        dispatch(quizPassingStartRequest());
        return requests.put(`/quiz/${id}/passing_start`, true)
            .then(
                response => dispatch(quizPassingStartReceived(response))
            )
            .catch(error => dispatch(quizPassingStartError(error)));
    }
};
export const quizPassingStartUnload = () => ({
    type: QUIZ_PASSING_START_UNLOAD,
});




