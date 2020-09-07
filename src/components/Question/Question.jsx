import React from 'react';

// import { randomNumber } from '../../services/random'

import './question.css';

const Question = ({ birds, idQuestion }) => {

    // console.log(birds, idQuestion + ' Question comp');

    return (
        birds.length === 5
            ?
            <div className='Question'>
                <div className='image'>
                    <img src={`${birds[idQuestion].img}`} alt={`${birds[idQuestion].latinName}`} />
                </div>
                <div className='description'>
                    <div className='label'>
                        <span>{`${birds[idQuestion].russianName} (${birds[idQuestion].latinName})`}</span>
                    </div>
                    <audio src={`${birds[idQuestion].sound}`} controls >
                        <span>Audio Track</span>
                    </audio>
                </div>
            </div>
            :
            <span> isLoading </span>
    )

}

// class Question extends Component {

//     // resource = new Resource();
//     // id = RandomNumber()

//     // state = {
//     //     urlPhoto: null,
//     //     genus: null,
//     //     audioTrack: null
//     // }

//     // constructor() {
//     //     super();
//     //     this.randomImgBird();
//     //     // debugger
//     //     this.voiceBird();
//     // }

//     // randomImgBird() {
//     //     this.resource.getImgBird(this.id)
//     //         .then((photo) => {
//     //             this.setState({
//     //                 urlPhoto: photo['url_m']
//     //             })
//     //         })
//     // }

//     // voiceBird() {
//     //     this.resource.getVoiceBird(this.id)
//     //         .then((audioTrack) => {
//     //             this.setState({
//     //                 audioTrack: audioTrack.file
//     //             })
//     //         })
//     // }

//     render() {

//         // const { urlPhoto, genus, audioTrack } = this.state;

//         return (
//             <div className='Question'>
//                 {/* <div className='image'>
//                     <img src={`${urlPhoto}`} />
//                 </div>
//                 <div className='description'>
//                     <div className='label'>
//                         <span>Genus</span>
//                     </div>
//                     <audio src={`${audioTrack}`} controls >
//                         <span>Audio Track</span>
//                     </audio>

//                 </div> */}
//             </div>
//         )
//     };
// }

export default Question;