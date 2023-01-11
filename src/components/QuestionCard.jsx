import React from 'react';
import './questioncard.css';


const QuestionCard = () => {

    //Styling

    // const cardStyle = {
    //     fontWeight: 'bold',
    //     fontSize: '2rem',

    // }

    //Properties

    
    
    //Helper Functions

    //Return
    return (
        <div>
            {/* Current Question no.? */}         

            {/* Question Card */}
            <div className='question-card'>
                <text className='question-text'>Question</text>
                <ul className='question-options'>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>
            </div>

            <button>Next</button>
            <button>Back</button>

        </div>
    );
};



export default QuestionCard;