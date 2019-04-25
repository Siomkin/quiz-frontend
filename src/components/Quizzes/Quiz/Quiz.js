import React from 'react';
import timeago from 'timeago.js';
import {Message} from "../../Common/Message";


export class Quiz extends React.Component {
    render() {
        const {quiz} = this.props;

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
            </div>
        )
    }
}
