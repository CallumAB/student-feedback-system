//React && Firebase
import React, {useState, useEffect} from 'react';

//Components
import Dropdown from '../../components/dropdown/Dropdown';
import GenericContact from './components/GenericContact';
import ContactCard from './components/ContactCard';

//CSS
import './contact.css'
import CourseModuleContact from './components/CourseModuleContact';

const Contact = () => {
    //State
    const defaultCategory = "Select Category";
    const [selectedCategory, setSelectedReason] = useState(defaultCategory);

    //Test Data
    const options = ["Course or Module", "Teaching", "Learning", "Timetabling issues", "Well being", "Legal", "Other"]


    //Handle clicks
    const reasonClick = (e) => {
        setSelectedReason(e.target.textContent);
    }

    //Element variables
    let nextOptions;
    if(selectedCategory === defaultCategory) {
        nextOptions = null;
    } else if(selectedCategory === "Course or Module") {
        nextOptions = <CourseModuleContact/>
    } else if(selectedCategory === "Other"){
        nextOptions = <ContactCard 
        title = "Other" 
        description = "We're sorry we are unable to provide you with a contact. Please contact the details below to be guided to the help you need."
        email = "email@email.com"
        number = "0123456789"/>
    } else {
        nextOptions = <GenericContact category={selectedCategory}/>
    }

    //Return    
    return (
        <main className="contact-page">
            <h3>Contact</h3>
            <p>What is your reason for contacting?</p>
            <h4>Select a category:</h4>
            <Dropdown text={selectedCategory} items={options} buttonClick={reasonClick}></Dropdown>
            {nextOptions}
        </main>
    )
}

export default Contact;