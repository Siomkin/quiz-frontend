import React, {Component} from 'react';
import '../css/App.css';
import {connect} from "react-redux";
import Header from "./Header";
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                </Switch>
            </div>
        );
    }
}

export default connect(null, null)(App);
