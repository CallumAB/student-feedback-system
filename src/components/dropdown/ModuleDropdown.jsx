//Imports
import React, { useState, useEffect } from 'react'
import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

//Components 
import Dropdown from './Dropdown';


const ModuleDropdown = (props) => {

    //State
    const defaultModuleValue = "Select module";
    const [selectedModule, setSelectedModule] = useState(defaultModuleValue);
    const [modulesData, setModulesData] = useState([]);
    const [moduleOptions, setModuleOptions] = useState([]);

    

    //Data  
        //Reads all available course documents from db
    const fetchPost = async () => {
        let newModulesData = [];
        console.log(props.docpath)
        await getDocs(collection(db, props.docpath))
            .then((docSnap) => {
                docSnap.docs.map((document) => {
                    newModulesData.push({
                        documentid: document.id,
                        moduletitle: document.data().moduletitle,
                        contacts: document.data().contacts,
                        surveys: document.data().surveys,
                    })
                })
                setModulesData(newModulesData);
                setModuleOptions(newModulesData.map((item) => item.moduletitle))
            })
        
    }

    //UseEffects
        //Calls on mount and when the props.docpath is updated
    useEffect(()=>{
        setSelectedModule(defaultModuleValue);
        fetchPost();
    }, [props.docpath])

        //Calls on mount and when selectedCourse is changed
    useEffect(() => {
        props.callback(getSelectedModuleData(), selectedModule);
    }, [selectedModule])


    //Helper functions
    const getSelectedModuleData = () => {
        let selectedModuleData = modulesData.find(item => item.moduletitle === selectedModule);
        if(selectedModuleData === undefined){return {}}
        else return selectedModuleData;
    }



    //Callback functions
    const moduleClick = (e) => {
        setSelectedModule(e.target.textContent);  
    }

    //Return
    return (
        <div>
            <h4>Choose a module:</h4>
            <Dropdown
                text={selectedModule} 
                items={moduleOptions}
                buttonClick={moduleClick}
            />
        </div>
    )
}


export default ModuleDropdown;