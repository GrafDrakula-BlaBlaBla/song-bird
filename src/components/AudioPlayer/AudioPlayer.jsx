import React from 'react'



const AudioPlayer = () => {

    return (
        <div className="audioPlayer">
            <audio>
                <source src='' />
            </audio>
            <div className="controls">
                <button className="play" />
                <input className="volume" type="range" />
                <span>time player</span>
            </div>
        </div>
    )

}

export default AudioPlayer