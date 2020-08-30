import React from 'react';

const AnswerItems = ({ arr }) => {

    const listAnswers = arr.map((birdName, i) => <li key={`${i}+${birdName}`}>{birdName}</li>);

    return listAnswers;

}

export default AnswerItems;