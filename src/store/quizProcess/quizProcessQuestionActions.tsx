import {requests} from "../../utils/agent";
import {Dispatch} from "redux";
import {QuizProcessQuestionActionTypes} from "./quizProcessTypes";


export const quizProcessQuestionRequest = () => ({
    type: QuizProcessQuestionActionTypes.FETCH_REQUEST,
});

export const quizProcessQuestionError = (error: object) => ({
    type: QuizProcessQuestionActionTypes.FETCH_ERROR,
    error
});

export const quizProcessQuestionReceived = (data: object) => ({
    type: QuizProcessQuestionActionTypes.FETCH_RECEIVED,
    data
});

export const quizProcessQuestion = (uuid: string) => {
    return (dispatch: Dispatch) => {
        dispatch(quizProcessQuestionRequest());
        return requests.get(`/quiz/${uuid}/question`, true)
            .then(
                response => dispatch(quizProcessQuestionReceived(response))
            )
            .catch(error => dispatch(quizProcessQuestionError(error)));
    }
};

export const quizProcessQuestionSetSelect = (answer: number) => ({
    type: QuizProcessQuestionActionTypes.SET_SELECTED,
    answer
});
export const quizProcessQuestionSetNext = () => ({
    type: QuizProcessQuestionActionTypes.SET_NEXT
});

export const quizProcessQuestionUnload = () => ({
    type: QuizProcessQuestionActionTypes.UNLOAD
});

export const quizProcessQuestionNext = (uuid: string) => {
    return (dispatch: Dispatch) => {
        dispatch(quizProcessQuestionSetNext());
        dispatch(quizProcessQuestionRequest());
        return requests.get(`/quiz/${uuid}/question`, true)
            .then(
                response => dispatch(quizProcessQuestionReceived(response))
            )
            .catch(error => dispatch(quizProcessQuestionError(error)));
    }
};




