import {
    QUIZ_PASSING_START_REQUEST,
    QUIZ_PASSING_START_RECEIVED,
    QUIZ_PASSING_START_ERROR,
    QUIZ_PASSING_START_UNLOAD
} from "../actions/constants";

export default (
    state = {
        passing: null,
        isFetching: false
    },
    action) => {
    switch (action.type) {
        case QUIZ_PASSING_START_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case QUIZ_PASSING_START_RECEIVED:
            return {
                ...state,
                passing: action.data,
                isFetching: false
            };
        case QUIZ_PASSING_START_ERROR:
        case QUIZ_PASSING_START_UNLOAD:
            return {
                ...state,
                passing: null,
                isFetching: false
            };
        default:
            return state;
    }
}
