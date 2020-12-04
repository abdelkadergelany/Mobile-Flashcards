import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { blue, pink, purple, red, white } from '../utils/colors';
import ActionButton from "./ActionButton";
import Info from './Info';

class Quiz extends Component {

    state = {
        questionNumber: 0,
        showQuestion:false,
        correct:0,
        incorrect:0
    }
    
    showAnswer = () => {
        console.log('zero')
     return !this.state.showQuestion ? this.setState({showQuestion:true}):this.setState({showQuestion:false})

    }
     submitAnswer = (answer) => {
         const {questionNumber} = this.state
         const deck = this.props.route.params.deck
         const decks = this.props.decks
        
       const correct = decks[deck].questions[questionNumber].correctAnswer.toLowerCase()
        
         
         if(answer=== correct){
             this.setState({correct:this.state.correct + 1})
         }
         else{
            this.setState({incorrect:this.state.incorrect + 1})
         }
          this.setState({questionNumber:this.state.questionNumber +1 , showQuestion:false})
       
        }


    render() {
         const questionNumber =  this.state.questionNumber
         const deck = this.props.route.params.deck
         const decks = this.props.decks
         const number = this.state.questionNumber + 1 
        
          if(questionNumber === decks[deck].questions.length){

            return(
                <View style={ styles.container }>
                    <View style={ styles.card }>
                         <Text style={ styles.mainText }>You got {this.state.correct} out of {decks[deck].questions.length} </Text>
                          {this.state.correct > this.state.incorrect? <Text style={{fontSize:85}}>😇</Text>:
                          <Text style={{fontSize:85}}>😡</Text>}
                          <ActionButton  styles={styles} text={'Try again'} color={purple}  />
                          <ActionButton  styles={styles} text={'Back'} color={blue}  />
                    </View>

                </View>
            )
          }
           
        return (
            <View style={ styles.container }>
                <View style={ styles.card}>
                        <Text style={ styles.questions}>{number} / {decks[deck].questions.length}</Text>
                        {!this.state.showQuestion? <Text style={ styles.mainText}>{decks[deck].questions[questionNumber].question}</Text>:
                        <Text style={ styles.mainText}>{decks[deck].questions[questionNumber].answer}</Text>}
                        {!this.state.showQuestion? <Info  styles={ styles.answer} onPress={this.showAnswer} text={'Show Answer'} />:
                        <Info  styles={ styles.answer} onPress={this.showAnswer} text={'Show Question'} />}
                         
                        <ActionButton onPress={()=>this.submitAnswer('true')} styles={styles} text={'Correct'} color={purple}/>
                
                        <ActionButton onPress={()=>this.submitAnswer('false')} styles={styles} text={'Incorrect'} color={red}/>

                </View>
                
            </View>
        )
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
    answer:{
        color: white,
        fontSize:20,
        margin:20
    },
  
    questions:{
     top: 0,
     alignSelf: 'flex-start',
     left:0,
     color:white,
     fontSize:20,
     margin:5,
     position: 'absolute'
    },
    submitBtnText:{
      color:white,
      fontSize:26,
      textAlign: 'center'
    },
    card:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: "center",
      backgroundColor:pink,
      margin:10,
      alignSelf:'stretch',
      height:100,
      borderRadius:10,
      shadowColor: 'rgba(0,0,0,0.35)',
      shadowOffset:{
        width:0,
        height:3
      },
      shadowRadius:4,
      shadowOpacity:1, 
    }, 
     mainText:{
        fontSize: 25,
        color:white,
        marginTop:40,
        textAlign: 'center',
        padding:5
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
  
  export default connect(mapStateToProps)(Quiz);