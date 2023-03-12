import React from 'react'

import PrimaryButton from '../../../components/PrimaryButton'

const SurveyCard = (props) => {

    //Helper functions
    const startSurvey = () => {
      props.callback(props.surveydata);
    }

    //Return
    return (
        <div className="contact-card">
          {props.surveytitle
            ? <p>{props.surveytitle}</p>
            : null            
          }
          
          {props.description
            ? <p>{props.description}</p>
            : null
          }

        <PrimaryButton text="Start Survey" onClick={startSurvey}/>
        </div>
    )
}

export default SurveyCard