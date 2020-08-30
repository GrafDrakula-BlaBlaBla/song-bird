import React, { Component } from 'react';
import AnswerItems from './AnswerItems/AnswerItems'


import { randomArrBirdName } from '../../services/random';
import { arrBirdNames } from '../../services/data';

export default class Answer extends Component {
    state = {
        arrBirdNames: []
    }

    constructor() {
        super()
    }

    componentDidMount() {
        const arr = randomArrBirdName(arrBirdNames, 5)
        this.setState({
            arrBirdNames: arr
        })
    }

    render() {
        // const {arrBirdNames} = 
        return (
            < div className='blockAnswer' >
                <ul className='listAnswers'>
                    <AnswerItems
                        arr={this.state.arrBirdNames}
                    />
                </ul>
            </div >
        )
    }
}