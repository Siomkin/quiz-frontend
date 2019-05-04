export interface QuizListTypes {
    quizzes: Array<object> | null,
    isFetching: boolean,
    currentPage: number,
    pageCount: number | null
}


export enum QuizListActionTypes {
    FETCH_REQUEST = '@@quizList/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quizList/FETCH_RECEIVED',
    FETCH_ERROR = '@@quizList/FETCH_ERROR',
    SET_PAGE = '@@quizList/SET_PAGE',
    UNLOAD = '@@quizList/UNLOAD'
}
