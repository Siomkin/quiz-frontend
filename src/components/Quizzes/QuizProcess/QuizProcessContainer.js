import React from 'react';
import {connect} from "react-redux";

import {Spinner} from "../../Common/Spinner";
import {quizProcess} from "../../../actions/quizProcessActions";
import QuizQuestion from "./QuizQuestion";
import timeago from "timeago.js";
import QuizComplete from "./QuizComplete";


const mapStateToProps = state => ({
    ...state.quizProcess,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    quizProcess
};

class QuizProcessContainer extends React.Component {
    componentDidMount() {
        this.props.quizProcess(this.props.match.params.uuid);
    }

    render() {
        const {quiz, member, questionsCount, answered, isFetching} = this.props;

        if (isFetching) {
            return (<Spinner/>);
        }
        if (null === quiz) {
            return ('');
        }

        function getContent() {
            if (member && member.completed_at) {
                return (<QuizComplete/>)
            }
            return <QuizQuestion uuid={member.uuid}/>
        }


        if (quiz) {
            return (
                <div>
                    <div className={'pt-3 pb-2'}>
                        <h3>{quiz.title}</h3>
                    </div>
                    <div className={'pb-4 row'}>
                        <div className={'col-sm'}>
                            Question {questionsCount > answered ? answered + 1 : answered} from {questionsCount}
                        </div>
                        <div className={'text-right col-sm'}>
                            <small className="text-muted">
                                Started: {timeago().format(member.started_at)} by&nbsp;
                            </small>
                        </div>
                    </div>
                    <div className={'mt-2'}>
                        {getContent()}
                    </div>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizProcessContainer);
