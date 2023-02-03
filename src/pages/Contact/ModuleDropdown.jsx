import React, { useState } from 'react'

const ModuleDropdown = (props) => {

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

    //Dropdown Items
    const dropDownItems =
        <div className="menu">
            {props.data.map((data) =>
            <li>
                <button id={data.id} onClick={handleClick}>{data.module}</button>
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

export default ModuleDropdown;