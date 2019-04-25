import React from 'react';

import {connect} from "react-redux";
import {Spinner} from "../../Common/Spinner";
import {Paginator} from "../../Common/Paginator";
import QuizzesList from "./QuizzesList";
import {quizListFetch, quizListSetPage} from "../../../actions/quizActions";

const mapStateToProps = state => ({
    ...state.quizList
});

const mapDispatchToProps = {
    quizListFetch, quizListSetPage
};

class QuizzesContainer extends React.Component {

    componentDidMount() {
        this.props.quizListFetch(this.getQueryParamPage());
    }

    componentDidUpdate(prevProps) {
        const {currentPage, quizListFetch, quizListSetPage} = this.props;

        if (prevProps.match.params.page !== this.getQueryParamPage()) {
            quizListSetPage(this.getQueryParamPage());
        }

        if (prevProps.currentPage !== currentPage) {
            quizListFetch(currentPage);
        }
    }

    getQueryParamPage() {
        return Number(this.props.match.params.page) || 1;
    }

    changePage(page) {
        const {history, quizListSetPage} = this.props;
        quizListSetPage(page);
        history.push(`/${page}`);
    }

    onNextPageClick(e) {
        const {currentPage, pageCount} = this.props;
        const newPage = Math.min(currentPage + 1, pageCount);
        this.changePage(newPage);
    }

    onPrevPageClick(e) {
        const {currentPage} = this.props;
        const newPage = Math.max(currentPage - 1, 1);
        this.changePage(newPage);
    }

    render() {
        const {quizzes, isFetching, currentPage, pageCount} = this.props;

        if (isFetching) {
            return (<Spinner/>);
        }

        return (
            <div>
                <div>
                    <QuizzesList quizzes={quizzes}/>
                    <Paginator currentPage={currentPage} pageCount={pageCount}
                               setPage={this.changePage.bind(this)}
                               nextPage={this.onNextPageClick.bind(this)}
                               prevPage={this.onPrevPageClick.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizzesContainer);
