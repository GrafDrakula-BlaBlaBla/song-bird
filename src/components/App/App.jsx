import React, { Component } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Description from '../Description/Description';


import './app.css'

class App extends Component {
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