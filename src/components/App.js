import '../assets/css/app.css';

import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import {requests} from "../utils/agent";

import Header from "./Header";
import {userLogout, userProfileFetch, userSetId} from "../actions/userActions";
import LoginForm from "./User/LoginForm";
import RegistrationContainer from "./User/Registration/RegistrationContainer";
import QuizzesContainer from "./Quizzes/QuizList/QuizzesContainer";
import QuizContainer from "./Quizzes/Quiz/QuizContainer";

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    userProfileFetch, userSetId, userLogout
};

class App extends Component {

    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');

        if (token) {
            requests.setToken(token);
        }
    }

    componentDidMount() {
        const userId = window.localStorage.getItem('userId');
        const {userSetId} = this.props;

        if (userId) {
            userSetId(userId);
        }
    }

    componentDidUpdate(prevProps) {
        const {userId, userData, userProfileFetch} = this.props;

        if (prevProps.userId !== userId && userId !== null && userData === null) {
            userProfileFetch(userId);
        }
    }

    render() {
        const {isAuthenticated, userData, userLogout} = this.props;

        return (
            <div>
                <Header isAuthenticated={isAuthenticated} userData={userData} logout={userLogout}/>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegistrationContainer}/>
                    <Route path="/quiz/:id" component={QuizContainer}/>
                    <Route path="/:page?" component={QuizzesContainer}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
