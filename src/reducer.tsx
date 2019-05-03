import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {connectRouter} from 'connected-react-router'
import auth from "./redusers/auth";
import quizList from "./redusers/quizList";
import quiz from "./redusers/quiz";
import quizPassingList from "./redusers/quizPassingList";
import passingStart from "./redusers/passingStart";
import quizProcess from "./redusers/quizProcess";

export default (history: any) => combineReducers({
    auth,
    quizList,
    quizPassingList,
    passingStart,
    quizProcess,
    quiz,
    router: connectRouter(history),
    form: formReducer
});