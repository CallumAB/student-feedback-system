import { useState } from 'react'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

export function useDocs(){
    const [documentSnap, setDocumentSnap] = useState(0)

    //Fetch Post
    const fetchPost = async (docPath) => {
        await getDocs(collection(db, docPath))
            .then((docSnap)=>{     
                setDocumentSnap(docSnap);
            }
        )
    }

    //Get course options
    const getCourseOptions = () => {
        let courseOptions = [];
        documentSnap.docs.map((course) => {
            courseOptions.push(course.data().coursetitle);
        })
        return courseOptions;
    }

    const getModuleOptions = () => {

    }

    const getModuleData = () => {
        
    }


    return[fetchPost, getCourseOptions, getModuleData];
}

