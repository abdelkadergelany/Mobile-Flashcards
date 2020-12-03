import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'

const initialData = {
    Geography: {
      title: "Geography",
      questions: [
        {
          question: "Is Cameroon a country",
          anser: "No , it is just a region ",
          correctAnswer: "false",
        },
        {
          question: "Which Country is next to Cameroon",
          anser: "Congo ",
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
       
      //  oldData !== null ? JSON.parse(oldData) : null;
        if(oldData !== null){
        //   console.log(2222)
        //   // oldData =  JSON.parse(oldData)
        //   console.log(val[name])
        // console.log(2222)
          // oldData =  JSON.parse(oldData)
          // console.log(oldData[name])
          val[name].questions.push(card)
        //  console.log(val)
          await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(val))
          // return oldData
        
        }
     
      }catch(e){
        console.log(e)
      }
    }
     
    // const storeData = async (value) => {
    //   try {
    //     const jsonValue = JSON.stringify(value)
    //     await AsyncStorage.setItem('@storage_Key', jsonValue)
    //   } catch (e) {
    //     // saving error
    //   }
    // }


    // export function  getDecks(deck){  
     
    //     getData = async () => {
    //     try {
    //       const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    //       if(results !== null) {
    //         // value previously stored
    //         return JSON.parse(results);
    //       }
    //       else{
    //         // const jsonValue = JSON.stringify( initialData)
    //         // await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY,jsonValue )
    //         return initialData;
    //       }
    //     } catch(e) {
    //       // error reading value
    //       console.log(e)
    //     }
    //   }
      
     
     
      //return initialData;
       // console.log(444);
        // return  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY,JSON.stringify( )
        // .then(results => {
        //     if(results === null)
        //     {
        //         AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY,JSON.stringify( initialData))
        //         return initialData;
        //     }
        //     else {
        //         return JSON.parse(results);
        //     }
        // })
        // )
   // }


    
    