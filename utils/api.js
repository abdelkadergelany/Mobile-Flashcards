import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'

const initialData = {
    Geography: {
      title: "Geography",
      questions: [
        {
          question: "Is south africa a country",
          anser: "No , it is just a region ",
          correctAnswer: "false",
        },
        {
          question: "Which US state is next to california",
          anser: "New york ",
          correctAnswer: "false",
        },
      ],
    },
  
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is closure",
          anser:
            "The combination of a function and the lexical environment within which that function was declared.",
          correctAnswer: "true",
        },
        {
          question: "What is a variable",
          anser: "Something that stores information",
          correctAnswer: "ture",
        },
      ],
    },
  };
  

    export const getData = () =>{return initialData}

    export function saveDeckTitle(title){
        return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY,JSON.stringify(
           [title] = {
               title: title,
               questions: []
           }

        ))
    }


    export function getDecks(deck){
        return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY,JSON.stringify( )
        .then(results => {
            if(results === null)
            {
                AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY,JSON.stringify( initialData))
                return initialData;
            }
            else {
                return JSON.parse(results);
            }
        })
        )
    }

