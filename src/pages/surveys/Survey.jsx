import React, { useState } from 'react'
import './survey.css'

//Components
import TakeSurvey from './components/TakeSurvey';
import FindSurvey from './components/FindSurvey';

const Survey = () => {
  //State
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [surveyData, setSurveyData] = useState(false);

  //Callback functions
  const startSurvey = (surveyData) => {
    console.log("Survey page: ", surveyData)
    setSurveyData(surveyData);
    setSurveyStarted(!surveyStarted)
  }

  //Return
  return (
    <main className="survey-page">
      {surveyStarted
        ? 
        <section>
          <TakeSurvey surveyData={surveyData}/>
        </section>
        : 
        <section>
          <FindSurvey callback={startSurvey}/>
        </section>
      }
    </main>
  )
}

export default Survey