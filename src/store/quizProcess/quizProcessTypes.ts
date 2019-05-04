export interface QuizProcessTypes {
    quiz: object | null,
    member: object | null,
    isFetching: boolean,
    answered: number,
    questionsCount: number | null,

    isFetchingQuestion: boolean,
    question: object | null,
    answers: Array<object> | null,
    isChecking: boolean,
    isAnswered: boolean,
    isRight: boolean,
    selected: number | null,

    top: null,
}

export enum QuizProcessActionTypes {
    FETCH_REQUEST = '@@quizProcess/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quizProcess/FETCH_RECEIVED',
    FETCH_ERROR = '@@quizProcess/FETCH_ERROR',
    SET_CURRENT = '@@quizProcess/SET_CURRENT',
    UNLOAD = '@@quizProcess/UNLOAD',
}


export enum QuizProcessQuestionActionTypes {
    FETCH_REQUEST = '@@quizProcessQuestion/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quizProcessQuestion/FETCH_RECEIVED',
    FETCH_ERROR = '@@quizProcessQuestion/FETCH_ERROR',
    UNLOAD = '@@quizProcessQuestion/UNLOAD',
    SET_SELECTED = '@@quizProcessQuestion/SET_SELECTED',
    SET_NEXT = '@@quizProcessQuestion/SET_NEXT',
}

export enum QuizProcessQuestionCheckActionTypes {
    FETCH_REQUEST = '@@quizProcessQuestionCheck/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quizProcessQuestionCheck/FETCH_RECEIVED',
    FETCH_ERROR = '@@quizProcessQuestionCheck/FETCH_ERROR',
    UNLOAD = '@@quizProcessQuestionCheck/UNLOAD',
    AGAIN = '@@quizProcessQuestionCheck/AGAIN'
}
