import React from 'react'

const Secondarybutton = (props) => {

    const buttonStyle = {
        backgroundColor: "white",
        borderRadius: "6px",
        borderWidth: "0",
        boxSizing: "border-box",
        color: "#1F2836",
        cursor: "pointer",
        fontSize: "16px",
        width: props.width,
        height: "36px",
        lineHeight: "1.15",
        outline: "none",
        overflow: "hidden",
        padding: "0 25px",
        position: "relative",
        textAlign: "center",
        userSelect: "none",  
    }

    return (
        <button style={buttonStyle} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Secondarybutton