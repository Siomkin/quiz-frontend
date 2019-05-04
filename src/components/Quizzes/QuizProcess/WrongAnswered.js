import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    quizProcessQuestionCheckAnswerAgain
} from "../../../store/quizProcess/quizProcessQuestionCheckActions";


const mapDispatchToProps = {
    quizProcessQuestionCheckAnswerAgain
};

class WrongAnswered extends Component {

    tryAgain() {
        const {quizProcessQuestionCheckAnswerAgain} = this.props;
        quizProcessQuestionCheckAnswerAgain();
    }

    render() {
        return (
            <div>
                <button className={'btn btn-danger btn-big btn-block'}
                        onClick={() => this.tryAgain()}>Try again
                </button>
            </div>
        );
    }
}

export default connect(
    null, mapDispatchToProps
)(WrongAnswered);