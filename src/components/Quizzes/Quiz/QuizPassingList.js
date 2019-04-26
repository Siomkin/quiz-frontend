import React from 'react';
import timeago from 'timeago.js';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import "../../../assets/css/quizPassingList.css";
import {Message} from "../../Common/Message";

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
                            <CSSTransition key={passing.id} timeout={1000} classNames="fade">
                                <div className="card-body border-bottom">
                                    <p className="card-text mb-0">
                                        {passing.uuid}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {timeago().format(passing.started_at)} by&nbsp;
                                        </small>
                                    </p>
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        )
    }
}
