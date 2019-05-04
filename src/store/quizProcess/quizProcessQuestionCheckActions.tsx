import {requests} from "../../utils/agent";
import {Dispatch} from "redux";
import {QuizProcessQuestionCheckActionTypes} from "./quizProcessTypes";


export const quizProcessQuestionCheckAnswerRequest = () => ({
    type: QuizProcessQuestionCheckActionTypes.FETCH_REQUEST,
});

export const quizProcessQuestionCheckAnswerAgain = () => ({
    type: QuizProcessQuestionCheckActionTypes.AGAIN,
});

export const quizProcessQuestionCheckAnswerUnload = () => ({
    type: QuizProcessQuestionCheckActionTypes.UNLOAD,
});

export const quizProcessQuestionCheckAnswerError = (error: object) => ({
    type: QuizProcessQuestionCheckActionTypes.FETCH_ERROR,
    error
});

export const quizProcessQuestionCheckAnswerReceived = (data: object) => ({
    type: QuizProcessQuestionCheckActionTypes.FETCH_RECEIVED,
    data
});

export const quizProcessQuestionCheckAnswer = (uuid: string, question_id: number, selected: number) => {
    return (dispatch: Dispatch) => {
        dispatch(quizProcessQuestionCheckAnswerRequest());
        return requests.post(`/quiz/${uuid}/question`, {'id': question_id, selected}, true)
            .then(
                response => dispatch(quizProcessQuestionCheckAnswerReceived(response))
            )
            .catch(error => dispatch(quizProcessQuestionCheckAnswerError(error)));
    }
};






