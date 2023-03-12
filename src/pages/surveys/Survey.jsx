import React, { useState } from 'react'

//Components
import StartSurvey from './components/StartSurvey';
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
    <div>
      {surveyStarted
        ? <StartSurvey surveyData={surveyData}/>
        : <FindSurvey callback={startSurvey}/>
      }
    </div>
  )
}

export default Survey