 
 import {ADD_DECK,GET_DECKS,RECIEVE_DECKS,ADD_CARD_TO_DECK } from '../actions/index'
 
 function deck (state = {},action){
    switch (action.type){
    case ADD_DECK:
   
      return {...state,...action.deck}
      
      case RECIEVE_DECKS:
        
      return{ ...state,...action.decks}
      
      case ADD_CARD_TO_DECK:
      const{question,answer,deck,correctAnswer} = actions.card
        return{...state,
        [deck]:{
        ...state[deck],
        questions: [...state[deck].questions,{question,answer,correctAnswer}]
        }
    }
       default:
       return state
 
 
 }


}

export default deck;