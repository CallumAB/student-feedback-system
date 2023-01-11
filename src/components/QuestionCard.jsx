import React from 'react';
import './questioncard.css';
import { useQuestion } from '../hooks/useQuestion';

const QuestionCard = () => {

    //Styling

    // const cardStyle = {
    //     fontWeight: 'bold',
    //     fontSize: '2rem',

    // }

    //Properties

    const [question, setQuestion] = useQuestion();
    
    //Helper Functions

    //Return
    return (
        <div>
            {/* Current Question no.? */}

            {/* Question */}
           
            
            {/* Question Card */}
            <div className='question-card'>
                <text className='question-text'>{question}Question</text>
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