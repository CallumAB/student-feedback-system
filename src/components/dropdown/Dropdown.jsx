import React, { useState } from 'react'
import './dropdown.css'

const Dropdown = (props) => {
    //State
    const [open, setOpen] = useState(false);

    //Helpers
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClick = (e) => {
        props.buttonClick(e);
        setOpen(!open);
    }

    //Element Variables
    const dropDownItems =
        <ul className="dropdown-list" >
            <div className="dropdown-divider"/>
            {props.items.map((item) =>
                <li key={item} onClick={handleClick}>{item}</li>
            )}
        </ul>
        
    //Return
    return (   
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={handleOpen}>{props.text}</button>
            {open ? (
                <div>
                    {dropDownItems}
                </div>
            ) : null}
        </div>
    )
}

export default Dropdown;