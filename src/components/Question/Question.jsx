import React from 'react';

import './question.css';

const Question = ({ birds, idQuestion }) => {


    return (
        // birds.length === 5
        //     ?
        <div className='Question'>
            <div className='image'>
                <img src={`${birds[idQuestion].img}`} alt={`${birds[idQuestion].latinName}`} />
            </div>
            <div className='description'>
                <div className='label'>
                    <span>{`${birds[idQuestion].russianName} (${birds[idQuestion].latinName})`}</span>
                </div>
                <audio src={`${birds[idQuestion].sound}`} controls >
                    <span>Audio Track</span>
                </audio>
            </div>
        </div>
        // :
        // <span> isLoading </span>
    )

}

export default Question;