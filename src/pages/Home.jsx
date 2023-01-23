import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

 
const Home = () => {

    const { user } = UserAuth();
    console.log("Home", user)

    const navigate = useNavigate();
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return(
            <nav>
                <p>Home page</p>
                <p>User id:{user.uid}</p>
 
                <div>
        			<button onClick={handleLogout}>Logout</button>
        		</div>
            </nav>
    )
}
 
export default Home;