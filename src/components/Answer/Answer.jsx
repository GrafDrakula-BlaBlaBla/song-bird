import React, { Component } from 'react';
import AnswerItems from './AnswerItems/AnswerItems'


import { randomArrBirdName } from '../../services/random';

export default class Answer extends Component {


    render() {
        return (
            <div className='blockAnswer'>
                <ul className='listAnswers'>
                    <AnswerItems />
                </ul>
            </div>
        )
    }
}