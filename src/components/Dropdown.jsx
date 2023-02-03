import React, { useState } from 'react'

const Dropdown = (props) => {

    //Test Data
    

    //State
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClick = (e) => {

        console.log("Im here")
        props.buttonClick(e);
    }

    

    //Dropdown Items
    const dropDownItems =
        <div className="menu">
            {props.items.map((item) =>
            <li>
                <button onClick={handleClick}>{item}</button>
            </li>
            )}
        </div>
        
    console.log("Dropdown data", props.data)

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