import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import Secondarybutton from '../../components/SecondaryButton';

import './home.css';
 
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
            <div>
                <div className="header">
                    <h2>Student help</h2>
                    <h2>& feedback</h2>
                    <p>Get in contact with the correct people for whatever problem you may have and complete student surveys.</p>

                </div>


                <div className="body">
                    <div>
                        <h1>Get in contact</h1>
                        <p>
                            We will direct you to the correct contact for whatever problem you may have. 
                            Just chat to our automated system to get started.
                        </p>
                        <Link to="/Contact">
                            <PrimaryButton text="Chat now"/>
                        </Link>
                    </div>

                    <div>
                        <h1>Student Surveys</h1>
                        <p>Complete student surveys set by the University</p>
                        <Link to="/Survey">
                            <PrimaryButton id="button" text="Find Survey"/>
                        </Link>
                    </div>
                </div>

            

                {/* <div>
                    <Secondarybutton onClick={handleLogout} text="Logout"/>
        		</div> */}
            </div>
    )
}
 
export default Home;