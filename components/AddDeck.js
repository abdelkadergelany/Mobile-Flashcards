import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { addNewDeck } from "../utils/api";


class AddDeck extends React.Component {
    state = {
      title: ''
        
    }

    submitDeckName = () =>{
       const  {title } = this.state;  
       if(title==="")
       {
           return false
       }
       const deckVal = {[title]: {
        title : title,
         questions:[],
        }   }
          //updating the memory
          console.log(deckVal)
          addNewDeck(deckVal )
            .then(results => {
               console.log(results)
            });
           
        //updating the store
       this.props.addDeck(deckVal)
       this.setState({title:''})
       this.props.navigation.navigate('DeckView',{deck:title})
     }
  render() {
    
    return (
      <View style={ styles.container }>
          <Text style={ styles.title }>Enter the new Deck's name</Text>
          <TextInput style={ styles.input } onChangeText={(text)=>this.setState({title:text})} 
          value={this.state.title}></TextInput>
          <Button style={ styles.submitBtn } onPress={this.submitDeckName} title='submit'></Button>
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
  input:{
 width: 200,
 height: 44,
 padding: 8,
 borderWidth: 1,
 borderColor: '#757575',
 margin: 50,
 borderRadius:8
  },
  title:{
    fontSize:30,
    color: '#333'
  },
  submitBtn:{
    borderWidth:0.5,
    borderColor: '#d6d7da',
    padding: 10,
    borderRadius: 7,
    overflow:'hidden'
  }
});



function mapDispatchToProps(dispatch){
  return{
   addDeck: (deck)=> dispatch(addDeck(deck))
  }

}

export default connect(null,mapDispatchToProps)(AddDeck);