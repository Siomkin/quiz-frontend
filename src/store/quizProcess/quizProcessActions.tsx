import {requests} from "../../utils/agent";
import {Dispatch} from "redux";
import {QuizProcessActionTypes} from "./quizProcessTypes";




export const quizProcessRequest = () => ({
    type: QuizProcessActionTypes.FETCH_REQUEST,
});

export const quizProcessError = (error: object) => ({
    type: QuizProcessActionTypes.FETCH_ERROR,
    error
});

export const quizProcessReceived = (data: object) =>
    ({
        type: QuizProcessActionTypes.FETCH_RECEIVED,
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





