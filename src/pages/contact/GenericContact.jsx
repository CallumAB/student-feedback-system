import React, { useState, useEffect } from 'react'
import RadioButton from '../../components/radiobutton/RadioButton';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase"
import ContactCard from './components/displaycontacts/ContactCard';


const GenericContact = (props) => {
    //State
    const defaultProblem = "default problem";
    const [selectedProblem, setSelectedProblem] = useState(defaultProblem);
    const [problemOptions, setProblemOptions] = useState([]);
    const [problemsData, setProblemsData] = useState([]);
    const [selectedProblemContacts, setSelectedProblemContacts] = useState([]);

    
    

    //Data
        //Reads available modules from db
    const fetchPost = async () => {
        let newProblemOptions = [];
        let newProblemsData = [];
        await getDocs(collection(db, props.category.toLowerCase()))
            .then((docSnap)=>{     
                docSnap.docs.map((problem) => {
                    newProblemOptions.push(problem.data().problemdesc);
                    newProblemsData.push({
                        key: problem.id,
                        problemdesc: problem.data().problemdesc,
                        contacts: problem.data().contacts
                    })
                })
                setProblemOptions(newProblemOptions);
                setProblemsData(newProblemsData);
            }) 
        }

        //Calls the fetchPost function once when the component is rendered
        //and when props.courseKey changes
    useEffect(()=>{
        setSelectedProblem(defaultProblem);
        fetchPost();
    }, [props.category]);

    const radioButtonClick = (e) => {
        setSelectedProblem(e.target.id);
        setSelectedProblemContacts(getSelectedProblemContacts());
    }

    const getSelectedProblemContacts = () => {
        if(selectedProblem !== defaultProblem){
            let result = problemsData.find(item => item.problemdesc === selectedProblem);
            if(result.contacts !== undefined){return result.contacts;}
            else {return []}
        } else {
            return [];
        }
    }

    //Element Variables
    const displayContacts = 
        selectedProblemContacts.map((contact) =>
            <ContactCard 
                fname={contact.fname} 
                lname={contact.lname}
                title={contact.title}
                email={contact.email}
                userid={contact.userid}
                number={contact.number}
                description={contact.description}
            />
        )

    return (
        <div>
            <h4>Select a problem:</h4>
            <RadioButton onClick={radioButtonClick} options={problemOptions}/>
            {selectedProblem !== defaultProblem
            ? 
            <div>
                <p>Contacts...</p>
                {displayContacts}
            </div>
            : null
            }
        </div>
    )
}

export default GenericContact