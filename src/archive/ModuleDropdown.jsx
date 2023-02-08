import React, { useState } from 'react'

const ModuleDropdown = (props) => {
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
    //  Maps
    const dropDownItems =
        <div className="menu">
            {props.data.map((data) =>
            <li>
                <button id={data.id} onClick={handleClick}>{data.module}</button>
            </li>
            )}
        </div>


    //Return
    return (   
        <div className='module-dropdown'>
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