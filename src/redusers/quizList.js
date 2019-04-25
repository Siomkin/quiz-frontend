import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_RECEIVED,
    QUIZ_LIST_ERROR,
    QUIZ_LIST_SET_PAGE
} from "../actions/constants";
import {hydraPageCount} from "../utils/apiUtils";

export default (state = {
    quizzes: null,
    isFetching: false,
    currentPage: 1,
    pageCount: null
}, action) => {
    switch (action.type) {
        case QUIZ_LIST_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QUIZ_LIST_RECEIVED:
            state = {
                ...state,
                quizzes: action.data['hydra:member'],
                pageCount: hydraPageCount(action.data),
                isFetching: false
            };
            return state;
        case QUIZ_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                quizzes: null
            };

        case QUIZ_LIST_SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        default:
            return state;
    }
}
