import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

//Components
import PrimaryButton from '../../components/PrimaryButton';

//CSS
import './home.css';
 
//SVGS
import contactSvg from './SVGS/contact.svg';
import surveySvg from './SVGS/survey.svg';


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
                    <h1>Get in contact</h1>
                    <div className="homepage-block">
                        <div>
                        <p>
                            Our system will direct you towards the correct contact for whatever problem you have.
                        </p>
                        <Link to="/Contact">
                            <PrimaryButton text="Chat now"/>
                        </Link>
                        </div>
                        <img src={contactSvg} alt="Contact graphic"/>
                        
                    </div>

                    <h1>Student Surveys</h1>
                    <div className="homepage-block">
                        <div>
                            <p>Complete student surveys set by the University</p>
                            <Link to="/Survey">
                                <PrimaryButton id="button" text="Find Survey"/>
                            </Link>
                        </div>
                        <img src={surveySvg} alt="Survey graphic"/>

                    </div>
                </div>

                

                {/* <div>
                    <Secondarybutton onClick={handleLogout} text="Logout"/>
        		</div> */}
            </div>
    )
}
 
export default Home;