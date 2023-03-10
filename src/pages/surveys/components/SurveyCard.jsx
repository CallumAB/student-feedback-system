import React from 'react'

import PrimaryButton from '../../../components/PrimaryButton'

const SurveyCard = (props) => {
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

        <PrimaryButton text="Start Survey" onClick={props.callback}/>
        </div>
    )
}


export default SurveyCard