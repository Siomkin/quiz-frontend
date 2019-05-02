import React from 'react';
import {connect} from "react-redux";
import {Spinner} from "../../Common/Spinner";
import {
    quizProcessQuestion,
    quizProcessQuestionCheckAnswer,
    quizProcessQuestionSetSelect
} from "../../../actions/quizProcessQuestionActions";
import RightAnswered from "./RightAnswered";
import WrongAnswered from "./WrongAnswered";
import classNames from "classnames";


const mapStateToProps = state => ({
    ...state.quizProcess,
});

const mapDispatchToProps = {
    quizProcessQuestion, quizProcessQuestionSetSelect, quizProcessQuestionCheckAnswer
};

class QuizQuestion extends React.Component {

    componentDidMount() {
        this.props.quizProcessQuestion(this.props.uuid);
    }

    setSelected(answer) {
        const {isAnswered, quizProcessQuestionSetSelect} = this.props;
        if (!isAnswered) {
            quizProcessQuestionSetSelect(answer);
        }
    }

    checkAnswer() {
        const {quizProcessQuestionCheckAnswer, uuid, question, selected} = this.props;
        quizProcessQuestionCheckAnswer(uuid, question.id, selected);
    }


    getButton() {
        const {isRight, selected, isAnswered, isChecking} = this.props;

        if (isAnswered) {
            if (isRight) {
                return (<RightAnswered uuid={this.props.uuid}/>);
            } else {
                return (<WrongAnswered/>);
            }
        } else {

            if (isChecking) {
                return (<Spinner/>);
            }

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

    render() {
        const {isFetching, selected, answers, question} = this.props;

        if (question === null || isFetching) {
            return (<Spinner/>);
        }
        if (question) {
            return (
                <div>
                    <div className={'pb-3'}><h5>{question.description}</h5></div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                answers.map(answer => {
                                    const onClick = () => {
                                        this.setSelected(answer.id);
                                    };
                                    return (
                                        <div key={answer.id}
                                             className={classNames('alert', {'alert-success': selected === answer.id})}
                                             onClick={onClick}>
                                            {answer.description}
                                        </div>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className={'pt-4'}>
                        {this.getButton()}
                    </div>
                </div>
            )
        }
        return ('')
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);