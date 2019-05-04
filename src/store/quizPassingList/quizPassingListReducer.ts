import {Reducer} from "redux";
import {QuizPassingListActionTypes, QuizPassingListTypes} from "./quizPassingListTypes";

export const initialState: QuizPassingListTypes = {
    quizPassingList: null,
    isFetching: false,
    currentPage: 1,
    pageCount: null
};

const reducer: Reducer<QuizPassingListTypes> = (state = initialState, action) => {
    switch (action.type) {
        case QuizPassingListActionTypes.FETCH_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QuizPassingListActionTypes.FETCH_RECEIVED:
            state = {
                ...state,
                quizPassingList: !state.quizPassingList ?
                    action.data['data'] : state.quizPassingList.concat(action.data['data']),
                pageCount: action.data['pageCount'],
                isFetching: false,
                currentPage: state.currentPage + 1
            };
            return state;
        case QuizPassingListActionTypes.FETCH_ERROR:
        case QuizPassingListActionTypes.UNLOAD:
            return initialState;
        default:
            return state;
    }
};

export {reducer as QuizPassingListReducer}