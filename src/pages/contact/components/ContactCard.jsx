import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import Chat from '../../chat/Chat';


const ContactCard = (props) => {

  const navigate = useNavigate();

  //Callback function
  const navChat = () => {
    navigate("/chat", {
      state: {
        targetUser: props.userid
      }
    });
  }

  return (
    <article className="contact-card">
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
        ? <p className='contact-card-misc'><strong>Email: </strong>{props.email}</p>
        : null
      }
      {props.number 
        ? <p className='contact-card-misc'><strong>Tel Number: </strong>{props.number}</p>
        : null
      }
      {props.userid 
        ? 
        <div className='contact-card-button'>
          <PrimaryButton text="Chat now" onClick={navChat}/>
        </div>
        : null
      }
      
  </article>
  )
}

export default ContactCard