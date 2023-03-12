import React, { useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton';
import RadioButton from '../../../components/radiobutton/RadioButton';
import Secondarybutton from '../../../components/SecondaryButton';

const StartSurvey = (props) => {

  //State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  //Helper functions
  const nextQuestion = () => {
    console.log("HIHIIHIHIHII")
    console.log("Question length: ", props.surveyData.questions.length)
    if(currentQuestionIndex < props.surveyData.questions.length - 1){
      setCurrentQuestionIndex((prevState) => prevState + 1);
    } else {
      console.log("End of quiz");
    }
  }

  const previousQuestion = () => {
    if(currentQuestionIndex !== 0){setCurrentQuestionIndex((prevState) => prevState - 1)}
  }


  //Element Variables
  let displayAnswers;
  if(props.surveyData.questions[currentQuestionIndex].questiontype === "open"){
    displayAnswers = 
        <input placeholder="Answer here..."></input>
  } else if(props.surveyData.questions[currentQuestionIndex].questiontype === "closed"){
    displayAnswers = 
      <RadioButton options={props.surveyData.questions[currentQuestionIndex].answers}/>
  } else {
    console.log("Invalid question type");
  }


  return (
    <div>
      
      <h3>{props.surveyData.surveytitle}</h3>
      <p>{props.surveyData.questions[currentQuestionIndex].questiontext}</p>
      <div>{displayAnswers}</div>
      <PrimaryButton text="Next" onClick={nextQuestion}/>
      <Secondarybutton text="Back" onClick={previousQuestion}/>
    </div>
  )
}

export default StartSurvey