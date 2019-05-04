import {requests} from "../../utils/agent";
import {Dispatch} from "redux";
import {QuizPassingListActionTypes} from "./quizPassingListTypes";


export const quizPassingListRequest = () => ({
    type: QuizPassingListActionTypes.FETCH_REQUEST,
});

export const quizPassingListError = (error: object) => ({
    type: QuizPassingListActionTypes.FETCH_ERROR,
    error
});

export const quizPassingListReceived = (data: object) => ({
    type: QuizPassingListActionTypes.FETCH_RECEIVED,
    data
});

export const quizPassingListFetch = (quiz: number, page = 1) => {
    return (dispatch: Dispatch) => {
        dispatch(quizPassingListRequest());
        return requests.get(`/quiz/${quiz}/passing_list?_page=${page}`, true)
            .then(response => dispatch(quizPassingListReceived(response)))
            .catch(error => dispatch(quizPassingListError(error)));
    }
};
export const quizPassingListUnload = () => ({
    type: QuizPassingListActionTypes.UNLOAD,
});