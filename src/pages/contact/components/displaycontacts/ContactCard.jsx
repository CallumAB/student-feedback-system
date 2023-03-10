import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton';

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      {props.fname
        ? <div>
            <p><b>{props.fname + " " + props.lname}</b></p>
            <p>{props.title}</p>
          </div>
        : <p><b>{props.title}</b></p>
      }
      
      {props.description
        ? <p>{props.description}</p>
        : null
      }

      {props.email
        ? <p><b>Email: </b>{props.email}</p>
        : null
      }
      {props.number 
        ? <p><b>Tel Number: </b>{props.number}</p>
        : null
      }
      {props.userid 
        ? <PrimaryButton text="Chat now"/>
        : null
      }
      
  </div>
  )
}

export default ContactCard