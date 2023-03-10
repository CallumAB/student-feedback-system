import React, { useState } from 'react'

//Components
import FindCourse from '../../../components/fetch/FindCourse'
import FindModule from '../../../components/fetch/FindModule'
import SurveyCard from './SurveyCard'


const FindSurvey = () => {

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
  const displayCourseSurveys = () => {
    if(selectedCourseData.surveys !== undefined){
      return selectedCourseData.surveys.map((survey) => 
      <SurveyCard
        surveytitle={survey.title}
        description={survey.description}
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
      />
    )
    } else {
      return null;
    }
  }

  //Element Variables

  return (
    <div>
      <h3>Find Surveys</h3>
      <FindCourse
        placeholder={defaultCourseValue}
        callback={courseCallback}
      />

    {/* Display module dropdown when course dropdown is filled */}
    {selectedCourse !== defaultCourseValue
      ? <FindModule 
          callback={moduleCallback}
          docpath={"courses/" + selectedCourseData.documentid + "/modules"}
        />
      : null
    }

    {/* Display available surveys when both dropdowns are filled */}
    {(selectedCourse !== defaultCourseValue && selectedModule !== defaultModuleValue)
    ? <div>
        {displayCourseSurveys()}
        {displayModuleSurveys()}
      </div>
    : null
    }

    </div>
  )
}

export default FindSurvey