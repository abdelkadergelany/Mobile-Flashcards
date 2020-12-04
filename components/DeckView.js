import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getData, getDatas } from "../utils/api";
import { lightPurp, pink, purple, white } from "../utils/colors";
import ActionButton from "./ActionButton";

class DeckView extends React.Component {
    

  render() {
    const deck = this.props.route.params.deck
    const decks = this.props.decks
    
    return (
      <View style={ styles.container }>
        <View style={ styles.card }>
          <Text style={ styles.cardText }>{decks[deck].title}</Text>
          <Text style={ styles.cardText }>{decks[deck].questions.length} Questions</Text>
       <ActionButton styles={styles} text='Add Card' onPress={()=>this.props.navigation.navigate('AddCard',{deck:deck})} color={purple} />
      

       <ActionButton styles={styles} text='Take Quiz' onPress={()=>this.props.navigation.navigate('Quiz',{deck:deck})} color={lightPurp} />
       </View>
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
  iosBtn:{
    padding:10,
    borderRadius:7,
    height:45,
    margin:5,
    width:170
  },
  submitBtnText:{
    color:white,
    fontSize:22,
    textAlign: 'center'
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



});



function mapStateToProps(decks) {
  
  return {
    decks:decks
  } 
}

export default connect(mapStateToProps)(DeckView);