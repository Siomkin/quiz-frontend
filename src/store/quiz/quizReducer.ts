import {QuizTypes, QuizActionTypes} from './quizTypes'
import {Reducer} from "redux";

export const initialState: QuizTypes = {
    quiz: null,
    isFetching: false
};

const reducer: Reducer<QuizTypes> = (state = initialState, action) => {

    switch (action.type) {
        case QuizActionTypes.FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case QuizActionTypes.FETCH_RECEIVED:
            return {
                ...state,
                quiz: action.data,
                isFetching: false
            };
        case QuizActionTypes.FETCH_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case QuizActionTypes.UNLOAD:
            return {
                quiz: null,
                isFetching: false
            };
        default:
            return state;
    }
};

export {reducer as QuizReducer}