import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const ContactCard = (props) => {
  return (
    <div className="contact-card">
        <p><b>{props.fname + " " + props.lname}</b></p>
        <p>{props.title}</p>
        <p><b>Email: </b>{props.email}</p>
        <PrimaryButton text="Chat now"/>
    </div>
  )
}

export default ContactCard