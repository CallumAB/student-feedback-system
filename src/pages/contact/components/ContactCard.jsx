import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const ContactCard = (props) => {
  return (
    <div className="contact-card">
        <p><b>{props.fname + " " + props.lname}</b></p>
        <p>{props.title}</p>
        {props.email
          ? <p><b>Email: </b>{props.email}</p>
          : null
        }
        {props.number 
          ? <p><b>Tel Number: </b>{props.number}</p>
          : null
        }
        {props.uid 
          ? <PrimaryButton text="Chat now"/>
          : null
        }
        
    </div>
  )
}

export default ContactCard