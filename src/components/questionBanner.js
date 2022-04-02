import React from "react";
import './questionBanner.css';

const QuestionBanner = (props) => {
    return (
        <div className="question-banner">
            <div className="question-number">Question {props.number}</div>
            <button className="question-button" onClick={props.route}>Click here!</button>
        </div>
    )
}

export default QuestionBanner;