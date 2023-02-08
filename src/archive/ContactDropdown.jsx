import React, { useState } from 'react'

const ContactDropdown = (props) => {  
    //State
    const [open, setOpen] = useState(false);

    //Helpers
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClick = (e) => {
        setOpen(!open);
        props.buttonClick(e);
    }

    //Dropdown Items
    //  Maps each 
    const dropDownItems =
        <div className="menu">
            {props.data.map((data) =>
            <li>
                <button key={data.id} onClick={handleClick}>{data.name}</button>
            </li>
            )}
        </div>

    //Return
    return (   
        <div>
            <button onClick={handleOpen}>{props.text}</button>
            {open ? (
                <ul >
                    {dropDownItems}
                </ul>
            ) : null}
        </div>
    )
}

export default ContactDropdown;