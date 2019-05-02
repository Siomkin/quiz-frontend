import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    ...state.quizProcess,
});

//const mapDispatchToProps = {};

class QuizComplete extends React.Component {

    render() {
        const {quiz} = this.props;
        return (
            <div>
                Echo result for quiz {quiz.uuid}
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(QuizComplete);