import React, { Component } from 'react';

import Resource from '../../services/resource';
import { randomNumber as RandomNumber } from '../../services/random'


import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Description from '../Description/Description';


import './app.css'

class App extends Component {

    _resource = new Resource();
    _id = RandomNumber()

    // state = {
    //     birds =[]
    // }

    constructor() {
        super()
        this.createObj();
    }

    createObj() {
        const arrImg = () => {
            this._resource.getImgBird(this.id)
                .then((photo) => {
                    return photo
                })();
        }


    }

    // randomImgBird() {
    //     this.resource.getImgBird(this.id)
    //         .then((photo) => {
    //             this.setState({
    //                 urlPhoto: photo['url_m']
    //             })
    //         })
    // }

    // voiceBird() {
    //     this.resource.getVoiceBird(this.id)
    //         .then((audioTrack) => {
    //             this.setState({
    //                 audioTrack: audioTrack.file
    //             })
    //         })
    // }


    render() {
        return (
            <div className='songbirdApp'>
                <Header />
                <Menu />
                <Question />
                <Answer />
                <Description />
            </div>

        )
    }
}

export default App;