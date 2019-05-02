import {
    QUIZ_PROCESS_REQUEST,
    QUIZ_PROCESS_RECEIVED,
    QUIZ_PROCESS_ERROR,
    QUIZ_PROCESS_SET_CURRENT,
    QUIZ_PROCESS_QUESTION_SET_NEXT,
    QUIZ_PROCESS_QUESTION_REQUEST,
    QUIZ_PROCESS_QUESTION_RECEIVED,
    QUIZ_PROCESS_QUESTION_ERROR,
    QUIZ_PROCESS_QUESTION_SET_SELECTED,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_RECEIVED,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_ERROR,
    QUIZ_PROCESS_QUESTION_CHECK_ANSWER_AGAIN
} from "../actions/constants";

export default (state = {
    quiz: null,
    member: null,
    isFetching: false,
    answered: 0,
    questionsCount: null,

    isFetchingQuestion: false,
    question: null,
    answers: null,
    isChecking: false,
    isAnswered: false,
    isRight: false,
    selected: null,

    top: null,

}, action) => {
    switch (action.type) {
        case QUIZ_PROCESS_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QUIZ_PROCESS_RECEIVED:
            state = {
                ...state,
                quiz: action.data['quiz'],
                member: action.data['member'],
                answered: action.data['answered'],
                questionsCount: action.data['questionsCount'],
                isFetching: false
            };
            return state;
        case QUIZ_PROCESS_ERROR:
            return {
                ...state,
                isFetching: false,
                quiz: null,
                member: null
            };

        case QUIZ_PROCESS_SET_CURRENT:
            return {
                ...state,
                currentQuestion: action.page
            };
        case QUIZ_PROCESS_QUESTION_REQUEST:
            state = {
                ...state,
                isFetchingQuestion: true,
            };
            return state;
        case QUIZ_PROCESS_QUESTION_RECEIVED:
            state = {
                ...state,
                member: action.data['member'] ? action.data['member'] : state['member'],
                question: action.data['question'],
                answers: action.data['answers'],
                answered: action.data['answered'] ? action.data['answered'] : state['answered'],
                isFetchingQuestion: false
            };
            return state;
        case QUIZ_PROCESS_QUESTION_ERROR:
            return {
                ...state,
                isFetchingQuestion: false,
                isRight: false,
                isAnswered: false,
                answers: null,
                question: null,
            };
        case QUIZ_PROCESS_QUESTION_SET_SELECTED:
            return {
                ...state,
                selected: action.answer
            };
        case QUIZ_PROCESS_QUESTION_SET_NEXT:
            return {
                ...state,
                isFetchingQuestion: false,
                question: null,
                answers: null,
                isChecking: false,
                isAnswered: false,
                isRight: false,
                selected: null
            };
        case QUIZ_PROCESS_QUESTION_CHECK_ANSWER:
            state = {
                ...state,
                isChecking: true,
            };
            return state;
        case QUIZ_PROCESS_QUESTION_CHECK_ANSWER_RECEIVED:
            state = {
                ...state,
                isRight: action.data['right'],
                member: action.data['member'] ? action.data['member'] : state.member,
                isAnswered: true,
                isChecking: false
            };
            return state;
        case QUIZ_PROCESS_QUESTION_CHECK_ANSWER_ERROR:
            return {
                ...state,
                isChecking: false,
                isRight: false,
                isAnswered: false
            };
        case QUIZ_PROCESS_QUESTION_CHECK_ANSWER_AGAIN:
            state = {
                ...state,
                isAnswered: false,
                selected: null
            };
            return state;
        default:
            return state;
    }
}
