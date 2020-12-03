import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, View,Text, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { blue, orange, pink, white } from '../utils/colors';

export default class AddCard extends Component {

    state = {
        question: '',
        answer: '',
        correctanswer: '',
          
      }

      submitCard = () =>{
        // const  {title } = this.state;  
        // const deckVal = {[title]: {
        //  title : title,
        //   questions:[],
        //  }   }
        //    //updating the memory
        //    console.log(deckVal)
        //    addNewDeck(deckVal )
        //      .then(results => {
                 console.log(555)
        //      });
            
        //  //updating the store
        // this.props.addDeck(deckVal)
        
        // this.props.navigation.navigate('DeckView',{deck:title})
      }

     
    render() {
        const deck = this.props.route.params.deck
        return (
            <KeyboardAvoidingView style={ styles.container } behavior='padding'>
                <View style={ styles.container }>

                    <Text style={styles.title }>Question</Text>
                    <TextInput onChangeText={(text)=>this.setState({question:text})} 
                        value={this.state.question} style={styles.input}></TextInput>

                    <Text  style={styles.title }>Answer</Text>
                      <TextInput onChangeText={(text)=>this.setState({answer:text})} 
                               value={this.state.answer} style={styles.input}></TextInput>

                    <Text  style={styles.title }>Correct Answer</Text>
                    <TextInput onChangeText={(text)=>this.setState({correctanswer:text})} 
                        value={this.state.correctanswer} style={styles.input}></TextInput>

                   

                   <TouchableOpacity style={styles.submitBtn } 
                   onPress={this.submitCard(deck)} >
                   <Text style={styles.submitBtnText } >Submit</Text>
                   </TouchableOpacity>
                
                </View>
            </KeyboardAvoidingView>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eef',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitBtnText:{
        color:white,
        fontSize:22,
        textAlign: 'center'
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
        width: 200,
        backgroundColor: blue,
        borderWidth:0.5,
        borderColor: '#d6d7da',
        padding: 10,
        borderRadius: 7,
        overflow:'hidden'
      }
  });
  