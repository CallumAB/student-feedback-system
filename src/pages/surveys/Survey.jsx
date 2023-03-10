import React, { useState } from 'react'

//Components
import StartSurvey from './components/StartSurvey';
import FindSurvey from './components/FindSurvey';

const Survey = () => {
  //State
  const [surveyStarted, setSurveyStarted] = useState(false);

  //Callback functions
  const startSurvey = (survey) => {
    setSurveyStarted(!surveyStarted)
  }

  //Return
  return (
    <div>
      {surveyStarted
        ? <StartSurvey/>
        : <FindSurvey callback={startSurvey}/>
      }
    </div>
  )
}

export default Survey