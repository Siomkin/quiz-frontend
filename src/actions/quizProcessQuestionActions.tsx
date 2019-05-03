import {requests} from "../utils/agent";
import {Dispatch} from "redux";

import {
    QUIZ_PROCESS_QUESTION_REQUEST,
    QUIZ_PROCESS_QUESTION_ERROR,
    QUIZ_PROCESS_QUESTION_RECEIVED,
    QUIZ_PROCESS_QUESTION_SET_SELECTED,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_ERROR,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_RECEIVED,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_AGAIN,
    QUIZ_PROCESS_QUESTION_SET_NEXT,
} from "./constants";


export const quizProcessQuestionRequest = () => ({
    type: QUIZ_PROCESS_QUESTION_REQUEST,
});

export const quizProcessQuestionError = (error: object) => ({
    type: QUIZ_PROCESS_QUESTION_ERROR,
    error
});

export const quizProcessQuestionReceived = (data: object) => ({
    type: QUIZ_PROCESS_QUESTION_RECEIVED,
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
    type: QUIZ_PROCESS_QUESTION_SET_SELECTED,
    answer
});
export const quizProcessQuestionSetNext = () => ({
    type: QUIZ_PROCESS_QUESTION_SET_NEXT
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


export const quizProcessQuestionCheckAnswerRequest = () => ({
    type: QUIZ_PROCESS_QUESTION_CHECK_ANSWER,
});

export const quizProcessQuestionCheckAnswerAgain = () => ({
    type: QUIZ_PROCESS_QUESTION_CHECK_ANSWER_AGAIN,
});

export const quizProcessQuestionCheckAnswerError = (error: object) => ({
    type: QUIZ_PROCESS_QUESTION_CHECK_ANSWER_ERROR,
    error
});

export const quizProcessQuestionCheckAnswerReceived = (data: object) => ({
    type: QUIZ_PROCESS_QUESTION_CHECK_ANSWER_RECEIVED,
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






