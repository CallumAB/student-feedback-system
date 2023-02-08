import React, { useState } from 'react'

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
        <div className="menu">
            {props.items.map((item) =>
            <li>
                <button onClick={handleClick}>{item}</button>
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

export default Dropdown;