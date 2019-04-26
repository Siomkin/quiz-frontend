import React from 'react';
import timeago from 'timeago.js';
import {Message} from "../../Common/Message";
import {Link} from "react-router-dom";


export class Quiz extends React.Component {
    render() {
        const {quiz, isAuthenticated} = this.props;

        if (null === quiz) {
            return (<Message message="Quiz does not exist"/>);
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <h2>{quiz.title}</h2>
                    <p className="card-text">{quiz.description}</p>
                    <p className="card-text border-top">
                        <small className="text-muted">
                            {timeago().format(quiz.createdAt)} by&nbsp;
                        </small>
                    </p>
                </div>

                {
                    isAuthenticated &&
                    (
                        <div className="nav-item text-center pb-4">
                            <Link to={`/beginQuiz/${quiz.id}`} className="btn btn-info">
                                Start new
                            </Link>
                        </div>
                    )
                }
            </div>
        )
    }
}
