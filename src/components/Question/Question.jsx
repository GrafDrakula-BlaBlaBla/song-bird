import React, { Component } from 'react';

// import Resource from '../../services/resource';
// import { randomNumber as RandomNumber } from '../../services/random';

import './question.css';
// import image from '../../img/ricardo.jpg';


class Question extends Component {

    // resource = new Resource();
    // id = RandomNumber()

    // state = {
    //     urlPhoto: null,
    //     genus: null,
    //     audioTrack: null
    // }

    // constructor() {
    //     super();
    //     this.randomImgBird();
    //     // debugger
    //     this.voiceBird();
    // }

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

        // const { urlPhoto, genus, audioTrack } = this.state;

        return (
            <div className='Question'>
                {/* <div className='image'>
                    <img src={`${urlPhoto}`} />
                </div>
                <div className='description'>
                    <div className='label'>
                        <span>Genus</span>
                    </div>
                    <audio src={`${audioTrack}`} controls >
                        <span>Audio Track</span>
                    </audio>

                </div> */}
            </div>
        )
    };
}

export default Question;