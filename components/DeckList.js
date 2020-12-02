import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { recieveDecks } from "../actions";
import { getDecks,getDatas } from "../utils/api";

class DeckList extends React.Component {

    componentDidMount(){
         
      //  getDecks()
      //    .then(decks => this.props.recieveAllDecks(decks))
      //this.props.recieveAllDecks(getDecks())
      
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('flashcards: decks')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log("reading data error")
  }
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('flashcards: decks', jsonValue)
  } catch (e) {
    // saving error
    console.log("saving error")
  }
}

       getData()
       .then(decks => 
        {
          console.log(decks)
          if(decks === null){
           
            storeData(getDatas())
            .then(dec => 
             {
              // if(decks === null){ }
               //console.log(dec)
             this.props.recieveAllDecks(getDatas())}
             )
 
          }
          else{
            //console.log(decks)
            this.props.recieveAllDecks(decks)
          }
      //  this.props.recieveAllDecks(decks)
    }
        )
//this.props.recieveAllDecks(getData)

      
      }


  render() {
       const decks = this.props.decks
    return (
      <View style={ styles.container }>
        {Object.keys(decks).map((deck) => {
            
          const { title, questions } = decks[deck];
          return (
            <View key={deck}>
              <Text> {title}</Text>
              <Text> {questions.length}</Text>
              <Button  title='view deck' onPress={()=>this.props.navigation.navigate('DeckView',{deck:deck})}></Button>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapDispatchToProps(dispatch){
    return{
     recieveAllDecks: (decks)=> dispatch(recieveDecks(decks))
    }
  
  }

function mapStateToProps(decks) {
  
    return {
      decks:decks
    } 
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(DeckList);