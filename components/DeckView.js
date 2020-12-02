import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getData, getDatas } from "../utils/api";

class DeckView extends React.Component {
    

  render() {
    const deck = this.props.route.params.deck
    //console.log(deck)
    const decks = this.props.decks
    
    return (
      <View style={ styles.container }>
          <Text>{decks[deck].title}</Text>
          <Text>{decks[deck].questions.length}</Text>
      
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



function mapStateToProps(decks) {
  
  return {
    decks:decks
  } 
}

export default connect(mapStateToProps)(DeckView);