import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getData } from "../utils/api";

class DeckList extends React.Component {
  render() {
       const decks = getData()
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

export default DeckList;