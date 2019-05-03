import React from 'react';
import {connect} from "react-redux";
import {quizPassingStartUnload} from "../../../actions/passingActions";
import {Spinner} from "../../Common/Spinner";
import {history} from '../../../configureStore'
import QuizNavItem from "./QuizNavItem";

const mapStateToProps = state => ({
    ...state.passingStart

});
const mapDispatchToProps = {
    quizPassingStartUnload
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

    render() {
        const {quizId, isFetching} = this.props;

        console.log(this.props);

        if (isFetching) {
            return (<Spinner> Starting ... </Spinner>);
        }

        return (
            <QuizNavItem quizId={quizId}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizStart);
