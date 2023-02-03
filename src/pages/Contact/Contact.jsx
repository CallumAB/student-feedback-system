import React, { useState } from 'react';
import ModuleDropdown from './ModuleDropdown'
import ContactDropdown from './ContactDropdown'


const Contact = () => {

    const [selectedModule, setSelectedModule] = useState('Module');
    const [selectedContact, setSelectedContact] = useState('Contact');

    // Test Data

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

    const moduleClick = (e) => {
        console.log(e.target.textContent)
        console.log("Module clicked", e.target.id); 
        setSelectedModule(e.target.textContent);
        setSelectedContact("Contact")
    }

    const contactClick = (e) => {
        console.log("Contact clicked", e.target.textContent)
        setSelectedContact(e.target.textContent)
    }

    const getContactData = () => {
        if(selectedModule != "Module"){
            let result = data.find(item => item.module === selectedModule);
            return result.contacts;
        } else {
            return data[0].contacts
        }
    }

    return (
        <div> 
            <div>This is the contact page</div>
            <ModuleDropdown data={data} text={selectedModule} buttonClick={moduleClick}/>
            <ContactDropdown data={getContactData()} text={selectedContact} buttonClick={contactClick}/>
        </div>
    );
};

export default Contact;