import React, {useState, useEffect} from 'react';
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

import Dropdown from '../dropdown/Dropdown';
import FindModule from './FindModule';

const FindCourse = (props) => {
    //State
    const [selectedCourse, setSelectedCourse] = useState(props.placeholder);
    const [coursesData, setCoursesData] = useState([]);
    const [courseOptions, setCourseOptions] = useState([]);

    //Data  
        //Reads all available course documents from db
    const fetchPost = async () => {
        let newCoursesData = [];
        await getDocs(collection(db, "courses"))
            .then((docSnap) => {
                docSnap.docs.map((document) => {
                    newCoursesData.push({
                        documentid: document.id,
                        coursetitle: document.data().coursetitle,
                        contacts: document.data().contacts,
                        surveys: document.data().surveys,
                    })
                })
                console.log("course data", newCoursesData)
                setCoursesData(newCoursesData);
                setCourseOptions(newCoursesData.map((item) => item.coursetitle))
            })
        
    }

    //UseEffects
        //Calls on mount
    useEffect(()=>{
        fetchPost();
    }, [])

        //Calls on mount and when selectedCourse is changed
    useEffect(() => {
        console.log("selected course data", getSelectedCourseData())
        props.callback(getSelectedCourseData(), selectedCourse);
    }, [selectedCourse])

    //Helper functions
    const getSelectedCourseData = () => {
    let selectedCourseData = coursesData.find(item => item.coursetitle === selectedCourse);
    if(selectedCourseData === undefined){return {}}
    else return selectedCourseData;
    }

    //Callback functions
    const courseClick = (e) => {
        setSelectedCourse(e.target.textContent);  
    }

    //Return
    return (
        <div>
            <p>Choose a course:</p>
            <Dropdown
                text={selectedCourse} 
                items={courseOptions}
                buttonClick={courseClick}
            />
        </div>
    )
}

export default FindCourse