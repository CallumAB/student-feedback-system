import React, { useState } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [open, setOpen] = useState(false);


    console.log(auth.currentUser)

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

    return (
        <nav>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/survey"><li>Surveys</li></Link>
                {auth.currentUser != null
                ? 
                <div>
                    <li onClick={handleLogout}>Logout</li>
                </div>  
                :   <Link to="/login"><li>Login</li></Link>
                }
            </ul>
        </nav>
    )
}

export default Navbar