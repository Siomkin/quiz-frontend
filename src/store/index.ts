import {combineReducers, Dispatch, Action, AnyAction} from 'redux'
import {connectRouter, RouterState} from 'connected-react-router'
import {History} from 'history'

import {reducer as formReducer} from "redux-form";


import {QuizTypes} from "./quiz/quizTypes";
import {QuizReducer} from "./quiz/quizReducer";

import {PassingStartTypes} from "./passingStart/passingStartTypes";
import {PassingStartReducer} from "./passingStart/passingStartReducer";

import {QuizListTypes} from "./quizList/quizListTypes";
import {QuizListReducer} from "./quizList/quizListReducer";



import {QuizPassingListTypes} from "./quizPassingList/quizPassingListTypes";
import {QuizPassingListReducer} from "./quizPassingList/quizPassingListReducer";

import {QuizProcessTypes} from "./quizProcess/quizProcessTypes";
import {QuizProcessReducer} from "./quizProcess/quizProcessReducer";


import {UserTypes} from "./user/userTypes";
import {UserReducer} from "./user/userReducer";


export interface ApplicationState {
    auth: UserTypes,
    quiz: QuizTypes,
    quizList: QuizListTypes,
    quizPassingList: QuizPassingListTypes,
    quizProcess: QuizProcessTypes,
    passingStart: PassingStartTypes,
    router: RouterState
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}


export const createRootReducer = (history: History) =>
    combineReducers({
        auth: UserReducer,
        quiz: QuizReducer,
        quizList: QuizListReducer,
        quizPassingList: QuizPassingListReducer,
        quizProcess: QuizProcessReducer,
        passingStart: PassingStartReducer,
        router: connectRouter(history),
        form: formReducer
    });