export interface QuizTypes {
    quiz: object | null,
    isFetching: boolean
}

export enum QuizActionTypes {
    FETCH_REQUEST = '@@quiz/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quiz/FETCH_RECEIVED',
    FETCH_ERROR = '@@quiz/FETCH_ERROR',
    UNLOAD= '@@quiz/UNLOAD'
}

