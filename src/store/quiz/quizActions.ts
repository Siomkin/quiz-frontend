import {requests} from "../../utils/agent";
import {QuizActionTypes} from './quizTypes'
import {Dispatch} from "redux";


export const quizRequest = () => ({
    type: QuizActionTypes.FETCH_REQUEST,
});

export const quizError = (error: object) => ({
    type: QuizActionTypes.FETCH_ERROR,
    error
});

export const quizReceived = (data: object) => ({
    type: QuizActionTypes.FETCH_RECEIVED,
    data
});

export const quizFetch = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(quizRequest());
        return requests.get(`/quizzes/${id}`)
            .then(response => dispatch(quizReceived(response)))
            .catch(error => dispatch(quizError(error)));
    }
};

export const quizUnload = () => ({
    type: QuizActionTypes.UNLOAD,
});