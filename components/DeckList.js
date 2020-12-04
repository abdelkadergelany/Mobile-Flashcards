import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { recieveDecks } from "../actions";
import { getDecks,getDatas,getData,storeData } from "../utils/api";
import { pink, white } from "../utils/colors";

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
       console.log(decks)
    return (
      <View style={ styles.container }>
        {Object.keys(decks).map((deck) => {
            
          const { title, questions } = decks[deck];
          return (
            <View style={ styles.card } key={deck}>
              <Text style={ styles.cardText }> {title}</Text>
              <Text style={ styles.cardText }> {questions.length} Cards</Text>
              <Button style={ styles.cardBtn } title='view deck' onPress={()=>this.props.navigation.navigate('DeckView',{deck:deck})}></Button>
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
    alignSelf: 'stretch',
    padding:5
  },
  card:{
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:pink,
    margin:8,
    height:100,
    borderRadius:10,
    shadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset:{
      width:0,
      height:3
    },
    shadowRadius:4,
    shadowOpacity:1, 
  },
  cardText:{
    fontSize:30,
    color:white,
    margin:8
  },
  cardBtn:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:5
  }
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