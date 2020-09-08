import React from 'react';


import './answerItems.css'

const AnswerItems = ({ birds }) => {

    const listAnswers = birds.map((bird, i) =>
        <li key={`${i}+${bird.latinName}`}>
            {`${bird.latinName} (${bird.russianName})`}
        </li>);

    return (
        <ul className='listAnswers'>
            {listAnswers}
        </ul>
    )

}

export default AnswerItems;