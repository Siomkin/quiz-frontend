export interface QuizPassingListTypes {
    quizPassingList: Array<object> | null,
    isFetching: boolean,
    currentPage: number,
    pageCount?: number | null
}

export enum QuizPassingListActionTypes {
    FETCH_REQUEST = '@@quizPassingList/FETCH_REQUEST',
    FETCH_RECEIVED = '@@quizPassingList/FETCH_RECEIVED',
    FETCH_ERROR = '@@quizPassingList/FETCH_ERROR',
    UNLOAD = '@@quizPassingList/UNLOAD'
}
