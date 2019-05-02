import React from 'react';
import {connect} from "react-redux";
import {quizPassingStart,quizPassingStartUnload} from "../../../actions/passingActions";
import {Spinner} from "../../Common/Spinner";
import {Link} from "react-router-dom";
import {history} from '../../../configureStore'

const mapStateToProps = state => ({
    ...state.passingStart

});
const mapDispatchToProps = {
    quizPassingStart,quizPassingStartUnload
};

export class QuizStart extends React.Component {

    componentDidUpdate(prevProps) {
        const {passing} = this.props;

        if (passing !== null) {
            history.push(`/passing/${passing.uuid}`);
        }
    }

    componentWillUnmount() {
        this.props.quizPassingStartUnload();
    }

    onStatNewPassingClick() {
        const {quizId, quizPassingStart} = this.props;
        quizPassingStart(quizId);
    }

    render() {
        const {passing, isFetching} = this.props;

        if (isFetching) {
            return (<Spinner/>);
        }
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
                <div onClick={this.onStatNewPassingClick.bind(this)} className="btn btn-info">
                    Start
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizStart);
