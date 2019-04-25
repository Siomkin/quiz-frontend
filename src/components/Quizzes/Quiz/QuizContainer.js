import React from 'react';
import {connect} from "react-redux";
import {Quiz} from "./Quiz";
import {Spinner} from "../../Common/Spinner";
import {quizFetch, quizUnload} from "../../../actions/quizActions";

const mapeStateToProps = state => ({
    ...state.quiz
});

const mapDispatchToProps = {
    quizFetch,
    quizUnload
};

class BlogPostContainer extends React.Component {
    componentDidMount() {
        this.props.quizFetch(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.quizUnload();
    }

    render() {
        const {isFetching, quiz} = this.props;

        if (isFetching) {
            return (<Spinner/>);
        }

        return (
            <div>
                <Quiz quiz={quiz}/>
            </div>
        )
    }
}

export default connect(mapeStateToProps, mapDispatchToProps)(BlogPostContainer);
