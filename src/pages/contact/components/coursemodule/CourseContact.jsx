import React, {useState, useEffect} from 'react';
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../../../firebase"

import Dropdown from '../../../../components/dropdown/Dropdown'
import ModuleContact from './ModuleContact';

const CourseContact = () => {
    //State
    const defaultCourseValue = "Select Course";
    const [selectedCourse, setSelectedCourse] = useState(defaultCourseValue);
    const [courseOptions, setCourseOptions] = useState([])
    const [courseKeys, setCourseKeys] = useState([])

    //Data
        //Reads available courses from db
    const fetchPost = async () => {
        let newCourseOptions = [];
        let courseKeys = [];
        await getDocs(collection(db, "courses"))
            .then((docSnap)=>{     
                docSnap.docs.map((course) => {
                    newCourseOptions.push(course.data().coursetitle)
                    courseKeys.push({
                        key: course.id,
                        coursetitle: course.data().coursetitle,
                    })
                })
                setCourseOptions(newCourseOptions);
                setCourseKeys(courseKeys);
            })
        }

        //Calls the fetchPost function once when the component is rendered
    useEffect(()=>{
        fetchPost();
    }, [])

    // console.log("Document Data", docSnap.docs);
    // console.log("Test doc data", docSnap.docs[0].id)
    // console.log("Test doc data", docSnap.docs[0].data())
    
    //Helpers
    const courseClick = (e) => {
        setSelectedCourse(e.target.textContent);
    }

    // BUG WITH THIS, isn't called the first click?? says the old key
    const getSelectedCourseID = () => {
        if(selectedCourse !== defaultCourseValue){
            let result = courseKeys.find(item => item.coursetitle === selectedCourse);
            return result.key;
        } else {
            return null;
        }
    }

    //Return
    return (
        <div>
            <h4>Choose a course:</h4>
            <Dropdown text={selectedCourse} items={courseOptions} buttonClick={courseClick}/>
            {/* Check if a course is selected before rendering module dropdown */}
            {selectedCourse !== defaultCourseValue
            ? 
            <div>
                <ModuleContact courseKey={getSelectedCourseID()}/>
            </div>  
            : null
            }

        </div>
        
    )
}

export default CourseContact