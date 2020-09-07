import React, { Component } from 'react';

import Resource from '../../services/resource';
import { randomNumber, randomArrBirdNames } from '../../services/random';
import { arrBirdNamesFull } from '../../services/data';
// import { arrBirdNamesTest } from '../../services/data';


import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
// import Answer from '../Answer/Answer';
// import Description from '../Description/Description';


import './app.css'

class App extends Component {

    _resource = new Resource();
    _randomArrBirdNames = randomArrBirdNames(arrBirdNamesFull, 5);
    // _randomArrBirdNames = arrBirdNamesTest;
    _id = randomNumber(0, 4);
    // _id = 3;


    constructor(props) {
        super(props)
        this._resource = new Resource()
        this.state = {
            isLoading: true,
            birds: null
        }
    }

    componentDidMount() {

        const arrObj = [];

        this._randomArrBirdNames.forEach((birdName, id) => {

            const obj = {}

            this._resource.getImgBird(birdName, id)
                .then(
                    response => {
                        // console.log(`getImgBird ${response, id}`)
                        obj.img = response.url_m;
                        obj.latinName = birdName;
                    },
                    this._resource.getVoiceBird(birdName, id)
                        .then(response => {
                            // console.log(`getVoiceBird ${response, id}`)
                            obj.russianName = response.en;
                            obj.sound = response.file;
                            arrObj.push(obj)

                            this.setState({
                                isLoading: false,
                                birds: [...arrObj]
                            })
                        })
                )
        })



    }


    render() {

        const { isLoading, birds } = this.state

        return (
            <div className='songbirdApp'>
                <Header />
                <Menu />
                {
                    isLoading
                        ?
                        console.info(`Data id loading ${this._id} App comp`)
                        :
                        <Question
                            isLoading={isLoading}
                            birds={birds}
                            idQuestion={this._id}
                        />

                }

                {/* <Answer /> */}
                {/* <Description /> */}
            </div>

        )
    }
}

export default App;