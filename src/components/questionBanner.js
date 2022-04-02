import React from "react";
import './questionBanner.css';

const QuestionBanner = (props) => {
    return (
        <div className="question-banner">
            <div className="question-number">Question {props.number}</div>
            <a href={props.route}><button className="question-button">Click here!</button></a>
        </div>
    )
}

export default QuestionBanner;