import React from 'react';
import timeago from 'timeago.js';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import "../../../assets/css/quizPassingList.css";
import {Message} from "../../Common/Message";
import {Link} from "react-router-dom";

export class QuizPassingList extends React.Component {
    render() {
        const {quizPassingList} = this.props;

        if (null === quizPassingList || 0 === quizPassingList.length) {
            return (<Message message="No passing yet"/>);
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="p-3 border-bottom"><h3>Previous passing: </h3></div>

                <TransitionGroup>
                    {quizPassingList.map(passing => {
                        return (
                            <CSSTransition key={passing.id} timeout={500} classNames="fade">
                                <div className="card-body border-bottom">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                {passing.uuid}
                                            </div>
                                            <div className="col-sm text-right">
                                                <Link to={`/passing/${passing.uuid}`}>
                                                    Go to quiz
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <small className="text-muted">
                                            {timeago().format(passing.started_at)} by&nbsp;
                                        </small>
                                    </div>
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        )
    }
}
