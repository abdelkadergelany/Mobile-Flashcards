import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { recieveDecks } from "../actions";
import { getDecks,getDatas,getData,storeData } from "../utils/api";

class DeckList extends React.Component {

    componentDidMount(){
       getData()
       .then(decks => 
        {        
          //if this is the first time of running the App
          //Initialize the memory with dummy data
          if(decks === null){          
            storeData(getDatas())
            .then(dec => 
             { this.props.recieveAllDecks(getDatas())}
             )
          }
          else{
            this.props.recieveAllDecks(decks)
          }
       }
        )     
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