import React, { Component } from 'react';

class Question extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='Question'>
                <div className='image'>
                    <img src='' />Image
                </div>
                <div className='description'>
                    <div className='label'>
                        <span> Label</span>
                    </div>
                    <span>Audio Track</span>
                </div>
            </div>
        )
    };
}

export default Question;