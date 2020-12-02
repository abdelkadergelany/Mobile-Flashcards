import { AsyncStorage } from "react-native";

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