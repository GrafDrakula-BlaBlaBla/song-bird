import React, { Component } from 'react';

import AnswerItems from './AnswerItems/AnswerItems'

import './answer.css'


const Answer = ({ birds }) => {

    return (

        <div className='blockAnswer'>
            <AnswerItems
                birds={birds}
            />
        </div>
    )
}

export default Answer;

// export default class Answer extends Component {
//     state = {
//         arrBirdNames: []
//     }

//     constructor() {
//         super()
//     }

//     componentDidMount() {
//         const arr = randomArrBirdName(arrBirdNames, 5)
//         this.setState({
//             arrBirdNames: arr
//         })
//     }

//     render() {
//         const { arrBirdNames } = this.state
//         return (
//             < div className='blockAnswer' >
//                 <ul className='listAnswers'>
//                     <AnswerItems
//                         arr={arrBirdNames}
//                     />
//                 </ul>
//             </div >
//         )
//     }
// }


// //------------
// import React, { Component } from 'react';
// import { apiCall } from './../../api/mockedApi';
// import Card from './../Cards/Card';
// import CardCreationForm from './../CardCreationForm/CardCreationForm'

// export default class CardContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [],
//       isLoading: true
//     };
//     this.handleCardDelete = this.handleCardDelete.bind(this);
//     this.handleCardCreation = this.handleCardCreation.bind(this);
//   }
//   componentDidMount() {
//     apiCall().then(cards => this.setState({ cards: cards , isLoading: false }));
//   }
//   handleCardDelete(id) {
//     this.setState(prevState => (
//       { cards: prevState.cards.filter(card => card.id !== id) }
//     ));
//   }
//   handleCardCreation(card) {
//     console.log(card);
//     this.setState(prevState => {
//       const nextUniqueId = prevState.cards.length > 0 ? 
//             prevState.cards[prevState.cards.length - 1].id + 1
//             : 1;
//       return {cards: [...prevState.cards, {id: nextUniqueId, url: card.url, gender: card.gender}]}
//     });
//   }

//   render() {
//     const {cards,isLoading} = this.state;
//     return (
//       <section className="products">
//         <div className="products__items">
//           {isLoading ?
//           (<div> No cards...</div>) : 
//             cards.map(card => (
//               <Card
//                 key={card.id}
//                 id={card.id}
//                 price={card.price}
//                 url={card.url}
//                 gender={card.gender}
//                 onCardClick={this.handleCardDelete}
//               />
//             ))}
//         </div>
//           <CardCreationForm onCreateCard={this.handleCardCreation}/>
//       </section>
//     )
//   }
// }