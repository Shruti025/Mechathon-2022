import React from "react";
import './HomePage.css';
import QuestionBanner from "../components/questionBanner";

const HomePage = () => {
    return (
        <div className="app">
            <h1 className="main-heading">Mechathon 2022</h1>
            <div className="question-container">
                <QuestionBanner number='1' route='/question1' />
                <QuestionBanner number='2' route='/question2' />
            </div>
        </div>
    )
};

export default HomePage;