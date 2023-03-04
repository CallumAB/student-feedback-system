import React from 'react'

const GenericContact = (props) => {
    return (
        <div>
            <p>Select a reason:</p>
            {props.category}
        </div>
    )
}

export default GenericContact