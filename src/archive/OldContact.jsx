import React, { useState } from 'react';




import ModuleDropdown from './components/ModuleDropdown'
import ContactDropdown from './components/ContactDropdown'
import PrimaryButton from '../../components/PrimaryButton';
import "./contact.css"


const Contact = () => {
    //State
    const [selectedModule, setSelectedModule] = useState('Select Module');
    const [selectedContact, setSelectedContact] = useState('Select Contact');

    //Test Data
    const data = [{
        id: 1,
        module: "Distributed Systems and Security",
        contacts: [
            {
                id: 1,
                name: "Mr. So and So",
            },
            {
                id: 2,
                name: "Misses So and So",
            }
        ]
    },
    {
        id: 2,
        module: "Web development",
        contacts: [
            {
                id: 1,
                name: "Michelle",
            },
            {
                id: 2,
                name: "Callum",
            }
        ]
    },
    ]

    //Helpers
    const moduleClick = (e) => {
        console.log(e.target.textContent)
        console.log("Module clicked", e.target.id); 
        setSelectedModule(e.target.textContent);
        setSelectedContact("Select Contact")
    }

    const contactClick = (e) => {
        console.log("Contact clicked", e.target.textContent)
        setSelectedContact(e.target.textContent)
    }

    const getContactData = () => {
        if(selectedModule !== "Select Module"){
            let result = data.find(item => item.module === selectedModule);
            return result.contacts;
        } else {
            return data[0].contacts
        }
    }


    //Return
    return (
        <div class="contact-page"> 
            <div>This is the contact page</div>
            <ModuleDropdown data={data} text={selectedModule} buttonClick={moduleClick}/>
            <ContactDropdown data={getContactData()} text={selectedContact} buttonClick={contactClick}/>
            <div className="button"><PrimaryButton text="Continue"/></div>
        </div>
    );
};

export default Contact;