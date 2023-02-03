import React, { useState } from 'react'

const ContactDropdown = (props) => {

    //Test Data
    

    //State
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClick = (e) => {
        setOpen(!open);
        props.buttonClick(e);
    }

    console.log("Contact data", props.data[1].id)

    //Dropdown Items
    const dropDownItems =
        <div className="menu">
            {props.data.map((data) =>
            <li>
                <button key={data.id} onClick={handleClick}>{data.name}</button>
            </li>
            )}
        </div>

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