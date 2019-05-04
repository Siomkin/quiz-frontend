import React from 'react';
import {connect} from "react-redux";
import {Quiz} from "./Quiz";
import {Spinner} from "../../Common/Spinner";
import {quizFetch, quizUnload} from "../../../store/quiz/quizActions";
import QuizPassingListContainer from "./QuizPassingListContainer";

const mapStateToProps = state => ({
    ...state.quiz,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    quizFetch,
    quizUnload
};

class QuizContainer extends React.Component {
    componentDidMount() {
        this.props.quizFetch(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.quizUnload();
    }

    render() {
        const {isAuthenticated, isFetching, quiz} = this.props;


        if (isFetching) {
            return (<Spinner/>);
        }

        return (
            <div>
                <Quiz quiz={quiz} isAuthenticated={isAuthenticated}/>
                {isAuthenticated && quiz && <QuizPassingListContainer quizId={this.props.match.params.id}/>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
