import React, { Component } from 'react';

import Resource from '../../services/resource';
import { randomNumber, randomArrBirdNames } from '../../services/random';
import { arrBirdNamesFull } from '../../services/data';


import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Description from '../Description/Description';


import './app.css'

class App extends Component {

    _resource = new Resource();
    _randomArrBirdNames = randomArrBirdNames(arrBirdNamesFull, 5);
    _id = randomNumber(0, 4);

    constructor(props) {
        super(props)
        this._resource = new Resource()
        this.state = {
            isLoading: true,
            birds: []
        }
    }

    componentDidMount() {

        const arrObj = [];

        this._randomArrBirdNames.forEach((birdName, id) => {

            const obj = {}

            this._resource.getImgBird(birdName, id)
                .then(
                    response => {
                        obj.img = response.url_m;
                        obj.latinName = birdName;
                    },
                    this._resource.getVoiceBird(birdName, id)
                        .then(
                            response => {
                                console.log(response)
                                obj.russianName = response.en;
                                obj.sound = response.file;
                                arrObj.push(obj)

                                this.setState({
                                    isLoading: false,
                                    birds: [...arrObj]
                                })
                            }
                        )
                )
        })
    }


    render() {

        const { isLoading, birds } = this.state

        // console.log(birds);

        return (
            <div className='songbirdApp'>
                <Header />
                <Menu />
                {
                    birds.length !== 5
                        ?
                        <span>Companent App isLoading data !</span>
                        :
                        <React.Fragment>
                            <Question
                                isLoading={isLoading}
                                birds={birds}
                                idQuestion={this._id}
                            />
                            <Answer
                                birds={birds}
                                idAnswer={this._id}
                            />
                        </React.Fragment>
                }

            </div>

        )
    }
}

export default App;