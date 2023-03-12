import React, { useEffect } from 'react'
import './radiobutton.css'

const RadioButton = (props) => {



    return (
        <div id="radio-button-options" className='radio-button-container'>
           {props.options.map((option) =>  
                <label key={option} className="form-control">
                    <input onClick={props.onClick} id={option} type="radio" name="radio" ></input>
                    {option}
                </label>
            
            )} 
        </div>
    )
}

export default RadioButton;