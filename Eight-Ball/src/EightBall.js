import React, { useState } from 'react';
import DefaultAnswers from './Answers';
import './EightBall.css';

const EightBall = ({answers = DefaultAnswers}) => {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black"
    });

    const choice = (arr) =>{
        let random = Math.floor(Math.random() * arr.length);
        return arr[random];
    }

    const handleClick = (e) => {
         setAnswer(choice(answers));
        console.log(choice(answers));
    }

    return (
        <div className='EightBall' onClick={handleClick} style={{ backgroundColor: answer.color }}>
            <b>{answer.msg}</b>
        </div>
    )
}

export default EightBall;