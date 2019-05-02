import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    quizProcessQuestionNext
} from "../../../actions/quizProcessQuestionActions";


const mapDispatchToProps = {
    quizProcessQuestionNext
};

class RightAnswered extends Component {

    next() {
        const {quizProcessQuestionNext} = this.props;
        quizProcessQuestionNext(this.props.uuid);
    }

    render() {
        return (
            <div>
                <button className={'btn btn-success btn-big btn-block'}
                        onClick={() => this.next()}
                >Next question
                </button>
            </div>
        );
    }
}

export default connect(
    null, mapDispatchToProps
)(RightAnswered);