import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getData, getDatas } from "../utils/api";
import { lightPurp, purple, white } from "../utils/colors";
import ActionButton from "./ActionButton";

class DeckView extends React.Component {
    

  render() {
    const deck = this.props.route.params.deck
    //console.log(deck)
    const decks = this.props.decks
    
    return (
      <View style={ styles.container }>
          <Text>{decks[deck].title}</Text>
          <Text>{decks[deck].questions.length}</Text>
       <ActionButton styles={styles} text='Add Card' onPress={()=>this.props.navigation.navigate('AddCard',{deck:deck})} color={purple} />
      

       <ActionButton styles={styles} text='Take Quiz' onPress={()=>this.props.navigation.navigate('Quiz',{deck:deck})} color={lightPurp} />
       
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
  }
});



function mapStateToProps(decks) {
  
  return {
    decks:decks
  } 
}

export default connect(mapStateToProps)(DeckView);