import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getData } from "../utils/api";

class DeckView extends React.Component {
    state = {
        text: ''

    }

    submitDeckName = () =>{
       const  {text } = this.state;
       saveDeckTitle(text)
       this.props.dispatch(AddDeck(text))
       this.props.navigation.navigate('DeckView')
     }
  render() {
    const deck = this.props.route.params.deck
    console.log(deck)
    const decks = getData()
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

export default DeckView;