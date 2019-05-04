import {Reducer} from "redux";
import {
    QuizProcessTypes,
    QuizProcessActionTypes,
    QuizProcessQuestionCheckActionTypes,
    QuizProcessQuestionActionTypes
} from "./quizProcessTypes";


export const initialState: QuizProcessTypes = {
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
};

const reducer: Reducer<QuizProcessTypes> = (state = initialState, action) => {

    switch (action.type) {
        case QuizProcessActionTypes.FETCH_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case QuizProcessActionTypes.FETCH_RECEIVED:
            state = {
                ...state,
                quiz: action.data['quiz'],
                member: action.data['member'],
                answered: action.data['answered'],
                questionsCount: action.data['questionsCount'],
                isFetching: false
            };
            return state;
        case QuizProcessActionTypes.FETCH_ERROR:
        case QuizProcessActionTypes.UNLOAD:
            return initialState;

        case QuizProcessActionTypes.SET_CURRENT:
            return {
                ...state,
                currentQuestion: action.page
            };
        case QuizProcessQuestionActionTypes.FETCH_REQUEST:
            state = {
                ...state,
                isFetchingQuestion: true,
            };
            return state;
        case QuizProcessQuestionActionTypes.FETCH_RECEIVED:
            state = {
                ...state,
                member: action.data['member'] ? action.data['member'] : state['member'],
                question: action.data['question'],
                answers: action.data['answers'],
                answered: action.data['answered'] ? action.data['answered'] : state['answered'],
                isFetchingQuestion: false
            };
            return state;
        case QuizProcessQuestionActionTypes.FETCH_ERROR:
        case QuizProcessQuestionActionTypes.UNLOAD:
            return {
                ...state,
                isFetchingQuestion: false,
                isRight: false,
                isAnswered: false,
                answers: null,
                question: null,
            };
        case QuizProcessQuestionActionTypes.SET_SELECTED:
            return {
                ...state,
                selected: action.answer
            };
        case QuizProcessQuestionActionTypes.SET_NEXT:
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
        case QuizProcessQuestionCheckActionTypes.FETCH_REQUEST:
            state = {
                ...state,
                isChecking: true,
            };
            return state;
        case QuizProcessQuestionCheckActionTypes.FETCH_RECEIVED:
            state = {
                ...state,
                isRight: action.data['right'],
                member: action.data['member'] ? action.data['member'] : state.member,
                isAnswered: true,
                isChecking: false
            };
            return state;
        case QuizProcessQuestionCheckActionTypes.FETCH_ERROR:
        case QuizProcessQuestionCheckActionTypes.UNLOAD:
            return {
                ...state,
                isChecking: false,
                isRight: false,
                isAnswered: false
            };
        case QuizProcessQuestionCheckActionTypes.AGAIN:
            state = {
                ...state,
                isAnswered: false,
                selected: null
            };
            return state;
        default:
            return state;
    }
};
export {reducer as QuizProcessReducer}