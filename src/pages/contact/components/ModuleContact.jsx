import React, {useState, useEffect} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase"

import Dropdown from '../../../components/Dropdown'

const ModuleContact = (props) => {
    //State
    const defaultModuleValue = "Select Module";
    const [selectedModule, setSelectedModule] = useState(defaultModuleValue);
    const [selectedModuleContacts, setSelectedModuleContacts] = useState([]);
    const [moduleOptions, setModuleOptions] = useState([]);
    const [modulesData, setModuleData] = useState([]);
    

    //Data
        //Reads available modules from db
    const fetchPost = async () => {
        let newModuleOptions = [];
        let newModulesData = [];
        await getDocs(collection(db, "courses/" + props.courseKey + "/modules"))
            .then((docSnap)=>{     
                docSnap.docs.map((module) => {
                    newModuleOptions.push(module.data().moduletitle);
                    newModulesData.push({
                        key: module.id,
                        moduletitle: module.data().moduletitle,
                        contacts: module.data().contacts,
                    })
                })
                setModuleOptions(newModuleOptions);
                setModuleData(newModulesData);
                console.log("MODULE DATA", newModulesData);
            }) 
        }

        //Calls the fetchPost function once when the component is rendered
        //and when props.courseKey changes
    useEffect(()=>{
        setSelectedModule(defaultModuleValue);
        fetchPost();
    }, [props.courseKey]);

    //Helpers
    const moduleClick = (e) => {
        setSelectedModule(e.target.textContent);
        setSelectedModuleContacts(getSelectedModuleContacts());
        console.log("These are the selected module contacts", selectedModuleContacts)
    }

    const getSelectedModuleContacts = () => {
        if(selectedModule !== defaultModuleValue){
            console.log("Here")
            let result = modulesData.find(item => item.moduletitle === selectedModule);
            if(result.contacts !== undefined){return result.contacts;}
            else {return []}
        } else {
            return [];
        }
    }

    //Element Variables
    const displayContacts = 
        selectedModuleContacts.map((contact) =>
            <div>
                <div>fname: {contact.fname}</div>
                <div>lname: {contact.lname}</div>
                <div>email: {contact.email}</div>
                <div>userid: {contact.userid}</div>
            </div>
        )



    //Return
    return (
        <div> 
            <div>Choose a module</div>
            <Dropdown text={selectedModule} items={moduleOptions} buttonClick={moduleClick}/>
            {selectedModule !== defaultModuleValue
            ? 
            <div>
                <div>Module Contacts</div>
                {displayContacts}
            </div>
            : null
            }
            
        </div>
    );
};

export default ModuleContact