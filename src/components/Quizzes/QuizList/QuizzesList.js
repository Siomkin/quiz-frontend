import React from 'react';
import timeago from 'timeago.js';
import {Link} from "react-router-dom";
import {Message} from "../../Common/Message";


class QuizzesList extends React.Component {
    render() {
        const {quizzes} = this.props;

        if (null === quizzes || 0 === quizzes.length) {
            return (<Message message="No quizzes exist"/>);
        }

        return (<div>
            {quizzes && quizzes.map(quiz => (
                <div className="card mb-3 mt-3 shadow-sm" key={quiz.id}>
                    <div className="card-body">
                        <h3>
                            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
                        </h3>
                        <p className="card-text bordet-top">
                            <small className="text-muted">
                                {timeago().format(quiz.createdAt)}
                            </small>
                        </p>
                    </div>
                </div>
            ))}
        </div>)
    }
}

export default QuizzesList;
