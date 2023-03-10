import React, { useState } from 'react';
import "../styles/survey.css"
import Primarybutton from '../components/PrimaryButton';
import Secondarybutton from '../components/SecondaryButton';

const OldSurvey = () => {

    //Test Data
const questions = [
{
    questionType: 2,
    questionText: "One a scale of 1 to 5, how good are teaching staff at explaining things?",
    answerOptions: [],
},
{
    questionType: 1,
    questionText: "How often do teaching staff make the subject engaging?",
    answerOptions: [
        "never",
        "not that often",
        "often",
        "very often",
        "all of the time"
    ]
},
{
    questionType: 1,
    questionText: "How often is the course intellectually stimulating?",
    answerOptions: [
        "never",
        "not that often",
        "often",
        "very often",
        "all of the time"
    ]
},
{
    questionType: 1,
    questionText: "How often does your course challenge you to achieve your best work?",
    answerOptions: [
        "never",
        "not that often",
        "often",
        "very often",
        "all of the time"
    ]
},
{
    questionType: 3,
    questionText: "Given a chance, what is one change that you would like to see?",
    answerOptions: [],
},
]

    //State

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = () => {
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion((prevState) => prevState + 1)
        } else {
            console.log("End of quiz");
        }
    }

    const lastQuestion = () => {
        if(currentQuestion !== 0){setCurrentQuestion((prevState) => prevState - 1)}
    }


    //Question card options
    const openEndedQuestion = 
        <div>
            <input placeholder="Answer here..."></input>
        </div>

    const radioOptionQuestion = 
        
        <div className="radio-option-list">
            {questions[currentQuestion].answerOptions.map((answerOption) => 
            <div className="radio-option-item">
                <input type="radio" name="rad"></input>
                <label>{answerOption}</label>
            </div>
            )}
        </div>
        

    const radioScaleQuestion =
        <div className="radio-scale-list">
            <div className="radio-scale-item">
                <input type="radio" name="rad"></input>
                <label>1</label>
            </div>
            <div className="radio-scale-item">
                <input type="radio" name="rad"></input>
                <label>2</label>
            </div>
            <div className="radio-scale-item">
                <input type="radio" name="rad"></input>
                <label>3</label>
            </div>
            <div className="radio-scale-item">
                <input type="radio" name="rad"></input>
                <label>4</label>
            </div>
            <div className="radio-scale-item">
                <input type="radio" name="rad"></input>
                <label>5</label>
            </div>
        </div>

    let questionOption;
    if(questions[currentQuestion].questionType === 1){
        questionOption = radioOptionQuestion 
    } 
    else if(questions[currentQuestion].questionType === 2){
        questionOption = radioScaleQuestion
    }
    else if(questions[currentQuestion].questionType === 3){
        questionOption = openEndedQuestion;  
    }

    //Next/Finish Button
    let nextButton;
    if(currentQuestion < questions.length - 1){
        nextButton = <Primarybutton
        text = "Next"
        width = "100%"
        onClick = {nextQuestion}
        />
    }else{
        nextButton = <Primarybutton
        text = "Finish"
        width = "100%"
        onClick = {nextQuestion}
        />
    }

    //Return
    return (
        <div className="survey-container">
            <p>Module name...</p>
            <div className="survey-card">
                <p className='question-text'>
                    {questions[currentQuestion].questionText} #{currentQuestion}
                </p>
                <hr/>
                <div className='question-option'>{questionOption}</div>

                <div className='buttons'>
                    {nextButton}
                    <Secondarybutton text = "Back" width = "100%" onClick = {lastQuestion}/>
                </div>
            </div>
        </div>
    );
};



export default OldSurvey;