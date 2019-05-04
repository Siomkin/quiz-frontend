export interface PassingStartTypes {
    passing: object | null,
    isFetching: boolean
}

export enum PassingStartActionTypes {
    FETCH_REQUEST = '@@passingStart/FETCH_REQUEST',
    FETCH_RECEIVED = '@@passingStart/FETCH_RECEIVED',
    FETCH_ERROR = '@@passingStart/FETCH_ERROR',
    UNLOAD = '@@passingStart/UNLOAD'
}
