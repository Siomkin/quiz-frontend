import {Reducer} from "redux";
import {QuizListTypes, QuizListActionTypes} from "./quizListTypes";


export const initialState: QuizListTypes = {
    quizzes: null,
    isFetching: false,
    currentPage: 1,
    pageCount: null
};

const reducer: Reducer<QuizListTypes> = (state = initialState, action) => {
    switch (action.type) {
        case QuizListActionTypes.FETCH_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QuizListActionTypes.FETCH_RECEIVED:
            state = {
                ...state,
                quizzes: action.data['data'],
                pageCount: action.data['pageCount'],
                isFetching: false
            };
            return state;
        case QuizListActionTypes.FETCH_ERROR:
        case QuizListActionTypes.UNLOAD:
            return initialState;
        case QuizListActionTypes.SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        default:
            return state;
    }
};

export {reducer as QuizListReducer}
