import React from 'react';
import {connect} from "react-redux";
import {Spinner} from "../../Common/Spinner";
import {
    quizProcessQuestionCheckAnswer
} from "../../../actions/quizProcessQuestionActions";
import RightAnswered from "./RightAnswered";
import WrongAnswered from "./WrongAnswered";


const mapStateToProps = state => ({
    ...state.quizProcess,
});

const mapDispatchToProps = {
    quizProcessQuestionCheckAnswer
};


class QuizQuestionCheck extends React.Component {


    checkAnswer() {
        const {quizProcessQuestionCheckAnswer, uuid, question, selected} = this.props;
        quizProcessQuestionCheckAnswer(uuid, question.id, selected);
    }


    render() {
        const {uuid, isRight, selected, isAnswered, isChecking} = this.props;

        if (isChecking) {
            return (
                <Spinner> Checking ... </Spinner>
            );
        }

        if (isAnswered && isRight) {
            return (<RightAnswered uuid={uuid}/>);
        } else if (isAnswered) {
            return (<WrongAnswered/>);
        } else {
            return (
                <div className={'text-center'}>
                    <button type="submit" className="btn btn-primary btn-big btn-block"
                            onClick={() => this.checkAnswer()}
                            disabled={!selected}>
                        Check answer
                    </button>
                </div>
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestionCheck);