import React, { useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton';
import RadioButton from '../../../components/radiobutton/RadioButton';
import Secondarybutton from '../../../components/SecondaryButton';
import {db} from "../../../firebase"
import {collection, doc, getDocs} from "firebase/firestore";

const TakeSurvey = (props) => {

  //State
  // let surveyResults = [1,2,3];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [openInput, setOpenInput] = useState("");
  const [radioButtonValue, setRadioButtonValue] = useState(null);
  const [surveyResults] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  //Upload results


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
        attribute: props.surveyData.questions[currentQuestionIndex].attribute,
      }
      console.log("These are the survey results", surveyResults)
    } else {
    }
  }

  const finishQuiz = () => {
    updateResults();
    console.log("End of quiz");
    console.log(surveyResults);
    setQuizFinished(!quizFinished)

    //Upload results
    const docRef = db.doc('/courses/compsci/modules/Distributed Systems');
    // const docRef = db.doc('/courses/' + props.coursetitle +'/modules/' + props.moduletitle);

    // Retrieve the current responses array from Firestore
    docRef.get().then((doc) => {
        const currentResponses = doc.data().responses || [];
        const updatedResponses = [...currentResponses, ...surveyResults];

        // Update the responses array with the new survey results
        docRef.update({
            responses: updatedResponses,
          }).then(() => {
            console.log('Survey results added successfully!');
          }).catch((error) => {
            console.error('Error adding survey results:', error);
          });
      })
      .catch((error) => {
        console.error('Error retrieving current responses:', error);
      });

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
        <input className="open-question-input-box" placeholder="Answer here..." value={openInput} onInput={e => setOpenInput(e.target.value)}></input>
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
    onClick = {finishQuiz}
    />
  }

  //Return
  return (
    <div>

      <h3>{props.surveyData.surveytitle}</h3>
      {quizFinished === false
      ?
      <form>
        <p>{props.surveyData.questions[currentQuestionIndex].questiontext}</p>
        <div className="question-options">{displayAnswers}</div>
        <div>
          {nextButton}
          <Secondarybutton text="Back" width="100%" onClick={previousQuestion}/>
        </div>
      </form>
      :
      <div>
        <p>Quiz complete!</p>
        <p>Thank you for completing the survey</p>
      </div>
    }
    </div>
  )
}

export default TakeSurvey