import {QUIZ_ERROR, QUIZ_RECEIVED, QUIZ_REQUEST} from "../actions/constants";

export default (
    state = {
        quiz: null,
        isFetching: false
    },
    action) => {
    switch (action.type) {
        case QUIZ_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case QUIZ_RECEIVED:
            return {
                ...state,
                quiz: action.data,
                isFetching: false
            };
        case QUIZ_ERROR:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}
