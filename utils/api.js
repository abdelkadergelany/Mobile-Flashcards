import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'

const initialData = {
    Geography: {
      title: "Geography",
      questions: [
        {
          question: "Cameroon is a country",
          answer: "True, it's a country located at the middle of Africa ",
          correctAnswer: "true",
        },
        {
          question: "Nigeria is a Country next to Cameroon",
          answer: "Yes Cameroon is bordered by Cameroon ",
          correctAnswer: "true",
        },
      ],
    },
  
    Python: {
      title: "Python",
      questions: [
        {
          question: "Python is combination of Multi snackes",
          answer:
            "Is a pogramming langae.",
          correctAnswer: "false",
        },
        {
          question: "Python is an open source",
          answer: "python is open source programming langage",
          correctAnswer: "true",
        },
      ],
    },
    Math: {
      title: "Math",
      questions: [
        {
          question: "2 * 3 + 5 = 12",
          answer:
            "11",
          correctAnswer: "false",
        },
        {
          question: "1 + 1 =2",
          answer: "2",
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
     