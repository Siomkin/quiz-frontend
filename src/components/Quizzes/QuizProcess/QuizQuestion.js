import React from 'react';
import {connect} from "react-redux";
import {Spinner} from "../../Common/Spinner";
import {
    quizProcessQuestion,
    quizProcessQuestionSetSelect
} from "../../../store/quizProcess/quizProcessQuestionActions";
import classNames from "classnames";
import QuizQuestionCheck from "./QuizQuestionCheck";


const mapStateToProps = state => ({
    ...state.quizProcess,
});

const mapDispatchToProps = {
    quizProcessQuestion, quizProcessQuestionSetSelect
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

    render() {
        const {uuid, isFetching, selected, answers, question} = this.props;

        if (question === null || isFetching) {
            return (<Spinner> Fetching ... </Spinner>);
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
                        <QuizQuestionCheck uuid={uuid}/>
                    </div>
                </div>
            )
        }
        return ('')
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);