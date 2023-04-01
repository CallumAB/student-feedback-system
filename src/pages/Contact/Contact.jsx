//React && Firebase
import React, {useState, useEffect} from 'react';
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

//Components
import Dropdown from '../../components/dropdown/Dropdown';
import GenericContact from './components/GenericContact';

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
        // nextOptions = <CourseContact/>
        nextOptions = <CourseModuleContact/>
    } else {
        nextOptions = <GenericContact category={selectedCategory}/>
    }

    //Return
    return (
        <div className="contact-page">
            <h3>Contact</h3>
            <p>What is your reason for contacting?</p>
            <h4>Select a category:</h4>
            <Dropdown text={selectedCategory} items={options} buttonClick={reasonClick}></Dropdown>
            {nextOptions}
        </div>
    )
}

export default Contact