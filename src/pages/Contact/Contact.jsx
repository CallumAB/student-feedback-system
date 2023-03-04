//React && Firebase
import React, {useState, useEffect} from 'react';
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

//Components
import Dropdown from '../../components/dropdown/Dropdown';
import CourseContact from './components/CourseContact';
import ModuleContact from './components/ModuleContact';
import GenericContact from './components/GenericContact';

//CSS
import './contact.css'

const Contact = () => {
    //State
    const defaultReason = "Select Reason";
    const [selectedReason, setSelectedReason] = useState(defaultReason);

    //Test Data
    const options = ["Problems with course", "Personal", "Generic Category Two", "Generic Category Three", "Other"]


    //Handle clicks
    const reasonClick = (e) => {
        setSelectedReason(e.target.textContent);
    }

    //Element variables
    let nextOptions;
    if(selectedReason === defaultReason) {
        nextOptions = null;
    } else if(selectedReason === "Problems with course") {
        nextOptions = <CourseContact/>
    } else {
        nextOptions = <GenericContact category={selectedReason}/>
    }

    //Return
    return (
        <div className="contact-page">
            <h3>Contact</h3>
            <p>What is your reason for contacting?</p>
            <p>Select a category:</p>
            <Dropdown text={selectedReason} items={options} buttonClick={reasonClick}></Dropdown>
            {nextOptions}
        </div>
    )
}

export default Contact