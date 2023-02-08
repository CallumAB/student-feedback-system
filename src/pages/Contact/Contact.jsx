//React && Firebase
import React, {useState, useEffect} from 'react';
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

//Components
import Dropdown from '../../components/Dropdown';
import CourseContact from './components/CourseContact';
import ModuleContact from './components/ModuleContact';
import GenericContact from './components/GenericContact';

const Contact = () => {
    //State
    const [selectedReason, setSelectedReason] = useState('Select Reason');

    //Test Data
    const options = ["Problems with course", "Personal", "Generic Category Two", "Generic Category Three", "Other"]


    //Handle clicks
    const reasonClick = (e) => {
        setSelectedReason(e.target.textContent);
    }

    //Element variables
    let nextOptions;
    if(selectedReason === "Problems with course") {
        nextOptions = <CourseContact/>
    } else {
        nextOptions = <GenericContact category={selectedReason}/>
    }

    //Return
    return (
        <div>
            <div>What is your reason for contacting?</div>
            <Dropdown text={selectedReason} items={options} buttonClick={reasonClick}></Dropdown>
            {nextOptions}
        </div>
    )
}

export default Contact