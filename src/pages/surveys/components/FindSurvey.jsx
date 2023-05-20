import React, { useState } from 'react'

//Components
import CourseDropdown from '../../../components/dropdown/CourseDropdown'
import ModuleDropdown from '../../../components/dropdown/ModuleDropdown'
import SurveyCard from './SurveyCard'


const FindSurvey = (props) => {

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

    //Retrieves surveydata from contact card and starts survey
  const startSurvey = (surveyData) => {
    console.log("Find Survey Page: ", surveyData);
    props.callback(surveyData);
  }

  //Helper functions
  const displayCourseSurveys = () => {
    if(selectedCourseData.surveys !== undefined){
      return selectedCourseData.surveys.map((survey) => 
      <SurveyCard
        surveytitle={survey.title}
        description={survey.description}
        surveydata={survey}
        callback={startSurvey}
      />
    )
    } else {
      return null;
    }
  }

  const displayModuleSurveys = () => {
    if(selectedModuleData.surveys !== undefined){
      return selectedModuleData.surveys.map((survey) => 
      <SurveyCard
        surveytitle={survey.surveytitle}
        description={survey.description}
        surveydata={survey}
        callback={startSurvey}
      />
    )
    } else {
      return null;
    }
  }

  //Element Variables

  return (
    <section>
      <h3>Find Surveys</h3>
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
    ? <section>
        <h4>Surveys...</h4>
        {displayCourseSurveys()}
        {displayModuleSurveys()}
      </section>
    : null
    }

    </section>
  )
}

export default FindSurvey