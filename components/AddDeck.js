import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getData, saveDeckTitle } from "../utils/api";

class AddDeck extends React.Component {
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
    
    return (
      <View >
          <Text>Enter the new Deck's name</Text>
          <TextInput onCHangeValue={(text)=>this.setState({text:text})} 
          value={this.state.text}></TextInput>
          <Button onPress={this.submitDeckName} title='submit'></Button>
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

export default AddDeck;