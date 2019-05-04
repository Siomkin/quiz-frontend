import {requests} from "../../utils/agent";

import {Dispatch} from "redux";
import {PassingStartActionTypes} from "./passingStartTypes";


export const quizPassingStartRequest = () => ({
    type: PassingStartActionTypes.FETCH_REQUEST,
});


export const quizPassingStartError = (error: string) => ({
    type: PassingStartActionTypes.FETCH_ERROR,
    error
});


export const quizPassingStartReceived = (data: object) =>
    ({
        type: PassingStartActionTypes.FETCH_RECEIVED,
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
    type: PassingStartActionTypes.UNLOAD,
});




