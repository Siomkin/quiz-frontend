import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {connectRouter} from 'connected-react-router'
import auth from "./redusers/auth";
import quizList from "./redusers/quizList";
import quiz from "./redusers/quiz";
import quizPassingList from "./redusers/quizPassingList";

export default (history) => combineReducers({
    auth,
    quizList,
    quizPassingList,
    quiz,
    router: connectRouter(history),
    form: formReducer
});