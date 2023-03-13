import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton';

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      {props.fname
        ? <div>
            <p className='contact-card-title'>{props.fname + " " + props.lname}</p>
            <p className='contact-card-misc'>{props.title}</p>
          </div>
        : <p className='contact-card-title'>{props.title}</p>
      }
      
      {props.description
        ? <p className='contact-card-misc'>{props.description}</p>
        : null
      }

      {props.email
        ? <p className='contact-card-misc'><b>Email: </b>{props.email}</p>
        : null
      }
      {props.number 
        ? <p className='contact-card-misc'><b>Tel Number: </b>{props.number}</p>
        : null
      }
      {props.userid 
        ? 
        <div className='contact-card-button'>
          <PrimaryButton text="Chat now"/>
        </div>
        : null
      }
      
  </div>
  )
}

export default ContactCard