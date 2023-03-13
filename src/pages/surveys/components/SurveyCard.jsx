import React from 'react'

import PrimaryButton from '../../../components/PrimaryButton'

const SurveyCard = (props) => {

    //Helper functions
    const startSurvey = () => {
      props.callback(props.surveydata);
    }

    //Return
    return (
        <div className="survey-card">
          {props.surveytitle
            ? <p className="survey-card-title">{props.surveytitle}</p>
            : null            
          }
          
          {props.description
            ? <p className="survey-card-description">{props.description}</p>
            : null
          }

        <div className="survey-card-button">
          <PrimaryButton  text="Start Survey" onClick={startSurvey}/>
        </div>
        
        </div>
    )
}

export default SurveyCard