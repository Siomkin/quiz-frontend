import {
    QUIZ_PASSING_LIST_REQUEST,
    QUIZ_PASSING_LIST_RECEIVED,
    QUIZ_PASSING_LIST_ERROR,
    QUIZ_PASSING_LIST_UNLOAD
} from "../actions/constants";

export default (state = {
    quizPassingList: null,
    isFetching: false,
    currentPage: 1,
    pageCount: null
}, action) => {
    switch (action.type) {
        case QUIZ_PASSING_LIST_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QUIZ_PASSING_LIST_RECEIVED:
            state = {
                ...state,
                quizPassingList: !state.quizPassingList ?
                    action.data['data'] : state.quizPassingList.concat(action.data['data']),
                pageCount: action.data['pageCount'],
                isFetching: false,
                currentPage: state.currentPage + 1
            };
            return state;
        case QUIZ_PASSING_LIST_ERROR:
        case QUIZ_PASSING_LIST_UNLOAD:
            return {
                ...state,
                isFetching: false,
                quizPassingList: null,
                currentPage: 1,
                pageCount: null
            };
        default:
            return state;
    }
}
