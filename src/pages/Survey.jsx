import React, { useState } from 'react';

const Survey = () => {

    //Test Data

    const questions = [{
        questionType: 1,
        questionText: "Radio option question",
        answerOptions: [
            "yes",
            "no",
            "maybe",
            "fine",
            "okay"
        ]
    },
    {
        questionType: 2,
        questionText: "Radio scale question",
        answerOptions: [],
    },
    {
        questionType: 3,
        questionText: "Open ended question",
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
        <div className='question-options'>
            {questions[currentQuestion].answerOptions.map((answerOption) => 
            <div>
                <input type="radio" name="rad"></input>
                <label>{answerOption}</label>
            </div>
            )}
        </div>

    const radioScaleQuestion =
        <div>
            <input type="radio" name="rad"></input>
            <label>One</label>
            <input type="radio" name="rad"></input>
            <label>Two</label>
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

    //Return
    return (
        <div>
            <div className='question-card'>
                <text className='question-text'>
                    {questions[currentQuestion].questionText} #{currentQuestion}
                </text>
                {questionOption}
            </div>
            <button onClick={lastQuestion}>Back</button>
            <button onClick={nextQuestion}>Next</button>
        </div>
    );
};



export default Survey;