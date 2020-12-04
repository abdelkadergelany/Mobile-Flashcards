import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'

const initialData = {
    Geography: {
      title: "Geography",
      questions: [
        {
          question: "Is Cameroon a country",
          answer: "No , it is just a region ",
          correctAnswer: "false",
        },
        {
          question: "Nigeria is a Country next to Cameroon",
          answer: "Yes Cameroon is bordered by Cameroon ",
          correctAnswer: "true",
        },
      ],
    },
  
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is closure",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
          correctAnswer: "true",
        },
        {
          question: "What is a variable",
          answer: "Something that stores information",
          correctAnswer: "true",
        },
      ],
    },
  };
  

    export const getDatas = () =>{return initialData}

    export function saveDeckTitle(title){
        return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY,JSON.stringify(
           [title] = {
               title: title,
               questions: []
           }

        ))
    }


    export const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
        console.log("reading data error")
      }
    }

    export  const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, jsonValue)
      } catch (e) {
        // saving error
        console.log("saving error")
      }
    }


  export const  addNewDeck = async (deck) => {
      try {
             
       const newdeck =  JSON.stringify(deck)
        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, newdeck )
     
      }catch(e){
        console.log(e)
      }
    }

    export const  addNewCard = async (name,card) => {
      try {
        
        const oldData = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
         const val =  JSON.parse(oldData)
 
        if(oldData !== null){   
          val[name].questions.push(card)
       
          await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(val))
        
        }
     
      }catch(e){
        console.log(e)
      }
    }
     