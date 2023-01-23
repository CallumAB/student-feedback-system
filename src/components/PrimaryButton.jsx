import React from 'react'

const PrimaryButton = (props) => {

   const buttonStyle = {
        backgroundColor: "#009EE2",
        borderRadius: "6px",
        borderWidth: "0",
        boxSizing: "border-box",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "100%",
        width: props.width,
        height: "44px",
        lineHeight: "1.15",
        margin: "12px 0 0",
        outline: "none",
        overflow: "hidden",
        padding: "0 25px",
        position: "relative",
        textAlign: "center",
        userSelect: "none",
        
    }

    return (
    <button 
    style={buttonStyle} 
    onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}

export default PrimaryButton