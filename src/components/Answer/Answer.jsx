import React, { Component } from 'react';

import AnswerItems from './AnswerItems/AnswerItems'
import Description from '../Description/Description'

import './answer.css'


const Answer = ({ birds, idAnswer }) => {

    return (

        <div className='blockAnswer'>
            <AnswerItems
                birds={birds}
            />
            <Description
                birds={birds}
                idDescription={idAnswer}
            />
        </div>
    )
}

export default Answer;
