import React from 'react';

// import Question from '../Question/Question'

import './description.css'

const Description = ({ birds, idDescription }) => {

    // birds.forEach(bird => console.log(bird))
    console.log(birds, idDescription)

    return (
        <div className='Description'>
            <div className='descriptionImage'>
                <img src={`${birds[idDescription].img}`} alt={`${birds[idDescription].latinName}`} />
                <div >
                    <span className='descriptionLabel'>{`${birds[idDescription].russianName} (${birds[idDescription].latinName})`}</span>
                    <audio className='audioTrack' controls >
                        <source src={`${birds[idDescription].sound}`} type="audio/mp3" />
                    </audio>
                </div>
            </div>

            <div className='descriptionTextArea'>
                <textarea name="description" value="This is a description.">
                    Something description
                </textarea>
            </div>
        </div>
    )
}

export default Description;