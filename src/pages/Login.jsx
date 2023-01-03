import React from 'react';

const Login = () => {

    const loginStyle = {
        fontWeight: 'bold',
        fontSize: '2rem',

    }

    const buttonStyle = {
        color: '#ffffff',
        backgroundColor: '#405cf5',

        height: '44px',
        width: '100%',
        
        borderRadius: '6px',
        borderWidth: '0',
        boxSizing: 'border-box',
        cursor: 'pointer',
        margin: '12px 0 0',
        outline: 'none',
        padding: '12px 14px',
        textAlign: 'center',
        userSelect: 'none',
        touchAction: 'manipulation',
        verticalAlign: 'middle',
    }

    

    return (
        <div> 
            <div style={loginStyle}>Continue using University Account...</div>            
            <button style={buttonStyle}>Continue with google</button>
        </div>
    );
};

export default Login;