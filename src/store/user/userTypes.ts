export interface UserTypes {
    token: string | null,
    userId: number | null,
    isAuthenticated: boolean,
    userData: object | null
}

export enum UserActionTypes {
    LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
    LOGOUT = '@@user/LOGOUT',
    SET_ID = '@@user/SET_ID',
    REGISTER_SUCCESS = '@@user/REGISTER_SUCCESS',
    REGISTER_COMPLETE = '@@user/REGISTER_COMPLETE',

    CONFIRMATION_SUCCESS = '@@user/CONFIRMATION_SUCCESS',

    PROFILE_REQUEST = '@@user/PROFILE_REQUEST',
    PROFILE_ERROR = '@@user/PROFILE_ERROR',
    PROFILE_RECEIVED = '@@user/PROFILE_RECEIVED',
}
