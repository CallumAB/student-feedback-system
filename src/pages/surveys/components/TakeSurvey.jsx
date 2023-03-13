import React, { useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton';
import RadioButton from '../../../components/radiobutton/RadioButton';
import Secondarybutton from '../../../components/SecondaryButton';

const TakeSurvey = (props) => {

  //State
  // let surveyResults = [1,2,3];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [openInput, setOpenInput] = useState("");
  const [radioButtonValue, setRadioButtonValue] = useState(null);
  const [surveyResults] = useState([]);


  //Helper functions
  const updateResults = () => {
    // If question type is open store results from input element
    if(props.surveyData.questions[currentQuestionIndex].questiontype === "open"){
      surveyResults[currentQuestionIndex] = {
        question: props.surveyData.questions[currentQuestionIndex].questiontext,
        answer: openInput,
      }
    } // Else if question type is closed store results from radio button element
    else if(props.surveyData.questions[currentQuestionIndex].questiontype === "closed"){
      surveyResults[currentQuestionIndex] = {
        question: props.surveyData.questions[currentQuestionIndex].questiontext,
        answer: radioButtonValue,
      }
      console.log("These are the survey results", surveyResults)
    } else {
    }
  }

  const nextQuestion = () => {
    updateResults();
    setOpenInput("");
    if(currentQuestionIndex < props.surveyData.questions.length - 1){
      setCurrentQuestionIndex((prevState) => prevState + 1);
    } else {
      console.log("End of quiz");
      console.log(surveyResults);
    }
  }

  const previousQuestion = () => {
    setOpenInput("");
    if(currentQuestionIndex !== 0){setCurrentQuestionIndex((prevState) => prevState - 1)}
  }


  //Callback functions
  const radioButtonClick = (e) => {
    setRadioButtonValue(e.target.id);
  }

  //Element Variables
  let displayAnswers;
  if(props.surveyData.questions[currentQuestionIndex].questiontype === "open"){
    displayAnswers = 
        <input placeholder="Answer here..." value={openInput} onInput={e => setOpenInput(e.target.value)}></input>
  } else if(props.surveyData.questions[currentQuestionIndex].questiontype === "closed"){
    displayAnswers = 
      <RadioButton options={props.surveyData.questions[currentQuestionIndex].answers} onClick={radioButtonClick}/>
  } else {
    console.log("Invalid question type");
  }

  let nextButton;
  if(currentQuestionIndex < props.surveyData.questions.length - 1){
    nextButton = <PrimaryButton
    fontSize = "1rem"
    text = "Next"
    width = "100%"
    onClick = {nextQuestion}
    />
  } else {
    nextButton = <PrimaryButton
    fontSize = "1rem"
    text = "Finish"
    width = "100%"
    onClick = {nextQuestion}
    />
  }

  //Return
  return (
    <div>
      <h3>{props.surveyData.surveytitle}</h3>
      <p>{props.surveyData.questions[currentQuestionIndex].questiontext}</p>
      <div>{displayAnswers}</div>
      <div>
        {nextButton}
        <Secondarybutton text="Back" width="100%" onClick={previousQuestion}/>
      </div>
      
    </div>
  )
}

export default TakeSurvey