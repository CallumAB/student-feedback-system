import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="logo-title">Logo</div>
            <a href='#' class='toggle-button'>
                <span class='bar'></span>
                <span class='bar'></span>
                <span class='bar'></span>
            </a>
            <div class="navbar-links">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar;