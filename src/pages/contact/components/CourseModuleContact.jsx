import React, { useState } from 'react'

//Components
import CourseDropdown from '../../../components/dropdown/CourseDropdown'
import ModuleDropdown from '../../../components/dropdown/ModuleDropdown'
import ContactCard from './ContactCard'


const CourseModuleContact = (props) => {

  //State
  const defaultCourseValue = "Select course";
  const defaultModuleValue = "Select module"
  const [selectedCourseData, setSelectedCourseData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(defaultCourseValue);
  const [selectedModuleData, setSelectedModuleData] = useState([]);
  const [selectedModule, setSelectedModule] = useState(defaultModuleValue);

  //Callback functions
    //Retrieves currently selected course data and title
  const courseCallback = (selectedCourseData, selectedCourse) => {
    setSelectedCourseData(selectedCourseData);
    setSelectedCourse(selectedCourse);
  }

    //Retrieves currently selected module data and title
  const moduleCallback = (selectedModuleData, selectedModule) => {
    setSelectedModuleData(selectedModuleData);
    setSelectedModule(selectedModule);
  }

  //Helper functions
  const displayCourseContacts = () => {
    if(selectedCourseData.contacts !== undefined){
      return selectedCourseData.contacts.map((contact) => 
      <ContactCard
        fname={contact.fname} 
        lname={contact.lname}
        title={contact.title}
        email={contact.email}
        userid={contact.userid}
        number={contact.number}
      />
      )
    } else {
      return null;
    }
  }

  const displayModuleContacts = () => {
    if(selectedModuleData.contacts !== undefined){
      return selectedModuleData.contacts.map((contact) => 
      <ContactCard
        fname={contact.fname} 
        lname={contact.lname}
        title={contact.title}
        email={contact.email}
        userid={contact.userid}
        number={contact.number}
      />
      )
    } else {
      return null;
    }
  }

  //Return
  return (
    <section>
      <CourseDropdown
        placeholder={defaultCourseValue}
        callback={courseCallback}
      />

    {/* Display module dropdown when course dropdown is filled */}
    {selectedCourse !== defaultCourseValue
      ? <ModuleDropdown
          callback={moduleCallback}
          docpath={"courses/" + selectedCourseData.documentid + "/modules"}
        />
      : null
    }

    {/* Display available surveys when both dropdowns are filled */}
    {(selectedCourse !== defaultCourseValue && selectedModule !== defaultModuleValue)
    ? <div>
        <h4>Contacts...</h4>
        {displayCourseContacts()}
        {displayModuleContacts()}
      </div>
    : null
    }

    </section>
  )
}

export default CourseModuleContact