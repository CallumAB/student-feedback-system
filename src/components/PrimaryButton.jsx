import React from 'react'

const PrimaryButton = (props) => {

   const buttonStyle = {
        backgroundColor: "#621360",
        borderRadius: "5px",
        borderWidth: "0",
        boxSizing: "border-box",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: props.fontSize,
        fontWeight: "bold",
        width: props.width,
        minWidth: "110px",
        minHeight: "36px",
        lineHeight: "1.15",
        outline: "none",
        overflow: "hidden",
        padding: "0 25px",
        position: "relative",
        textAlign: "center",
        userSelect: "none",
        marginTop: props.marginTop,
    }

    return (
        <button style={buttonStyle} onClick={props.onClick}>
        {props.text}
        </button>
  )
}

export default PrimaryButton