import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {quizPassingStart} from "../../../store/passingStart/passingStartActions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.passingStart

});
const mapDispatchToProps = {
    quizPassingStart
};


class QuizNavItem extends Component {
    
    onStatNewPassingClick() {
        const {quizId, quizPassingStart} = this.props;
        quizPassingStart(quizId);
    }

    render() {
        const {passing} = this.props;

        if (null !== passing) {
            return (
                <div className="nav-item text-center pb-4">
                    <Link to={`/passing/${passing.uuid}`} className="btn btn-info">
                        Go to quiz
                    </Link>
                </div>
            );
        }

        return (

            <div className="nav-item text-center pb-4">
                <div onClick={() => this.onStatNewPassingClick()} className="btn btn-info">
                    Start
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizNavItem);