import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_RECEIVED,
    QUIZ_LIST_ERROR,
    QUIZ_LIST_SET_PAGE
} from "../actions/constants";

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
                quizzes: action.data['data'],
                pageCount: action.data['pageCount'],
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
