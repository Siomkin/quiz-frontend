import React from 'react';
import {connect} from "react-redux";
import {Spinner} from "../../Common/Spinner";
import {quizPassingListFetch, quizPassingListUnload} from "../../../store/quizPassingList/quizPassingListActions";
import {QuizPassingList} from "./QuizPassingList";
import {LoadMore} from "../../Common/LoadMore";

const mapStateToProps = state => ({
    ...state.quizPassingList,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    quizPassingListFetch, quizPassingListUnload
};

class QuizPassingListContainer extends React.Component {
    componentDidMount() {
        this.props.quizPassingListFetch(this.props.quizId);
    }

    componentWillUnmount() {
        this.props.quizPassingListUnload();
    }

    onLoadMoreClick() {
        const {quizId, currentPage, quizPassingListFetch} = this.props;
        quizPassingListFetch(quizId, currentPage);
    }

    render() {
        const {isFetching, quizPassingList, currentPage, pageCount} = this.props;

        const showLoadMore = pageCount > 1 && currentPage <= pageCount;

        if (isFetching && currentPage === 1) {
            return (<Spinner/>);
        }


        return (
            <div>
                <QuizPassingList quizPassingList={quizPassingList}/>
                {showLoadMore && <LoadMore label="Load more ..."
                                           onClick={this.onLoadMoreClick.bind(this)}
                                           disabled={isFetching}/>}
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPassingListContainer);
