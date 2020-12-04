import React, { Component } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { blue, pink, purple, red, white } from '../utils/colors';
import ActionButton from "./ActionButton";
import Info from './Info';

class Quiz extends Component {

    state = {
        questionNumber: 0,
        showQuestion:false,
        correct:0,
        incorrect:0,
        animation: new Animated.Value(0.5),
        rotate: new Animated.Value(0)
    }
    
    showAnswer = () => {
        console.log('zero')
     return !this.state.showQuestion ? this.setState({showQuestion:true}):this.setState({showQuestion:false})

    }
     submitAnswer = (answer) => {
         this.handleAnimaion()
         const {questionNumber} = this.state
         const deck = this.props.route.params.deck
         const decks = this.props.decks
        
       const correct = decks[deck].questions[questionNumber].correctAnswer.toLowerCase()
        
         
         if(answer.trim() === correct.trim()){
             this.setState({correct:this.state.correct + 1})
         }
         else{
            this.setState({incorrect:this.state.incorrect + 1})
         }
          this.setState({questionNumber:this.state.questionNumber +1 , showQuestion:false})
       
        }
          goBack = () =>{
            this.props.navigation.goBack(null);
          }
        tryAgain = () =>{
          this.setState({
            questionNumber:0,
            showQuestion:false,
            correct:0,
            incorrect: 0
          })
        }
    handleAnimaion = () =>{
        Animated.spring(this.state.animation,
            {toValue: 1.3,
            friction: 2,
            tension: 360,
              duration: 1000}).start(( )=>{Animated.spring(this.state.animation,
                {toValue: 1,
                duration: 1000}).start()
            })
            Animated.timing(this.state.rotate,{
                toValue:360,
                duration:1500,
                delay:1000
            }).start(()=>{
                Animated.timing(this.state.rotate,{
                    toValue:0,
                    duration: 1000
                }).start()
            })
    }

    render() {
         const questionNumber =  this.state.questionNumber
         const deck = this.props.route.params.deck
         const decks = this.props.decks
         const number = this.state.questionNumber + 1 
         const animatedStyle = {
             transform:[
                 {scale: this.state.animation}
             ]
         }
          const rotateInterpolate = this.state.rotate.interpolate({
              inputRange: [0,360],
              outputRange: ["0deg","1080deg"]
          })
           const rotateStyles ={
               transform:[
                   {
                       rotate:rotateInterpolate
                   }
               ]
           }
          if(questionNumber === decks[deck].questions.length){

            return(
                <View style={ styles.container }>
                    <View style={ styles.card }>
                        <Animated.View style={animatedStyle}>
                         <Text style={ styles.mainText }>You got {this.state.correct} out of {decks[deck].questions.length} </Text>
                        </Animated.View>
                         {this.state.correct > this.state.incorrect? <Animated.View style={rotateStyles}><Text style={{fontSize:85}}>😇</Text></Animated.View>:
                          <Animated.View style={rotateStyles}><Text style={{fontSize:85}}>😡</Text></Animated.View>}
                          <ActionButton  onPress={this.tryAgain} styles={styles} text={'Try again'} color={purple}  />
                          <ActionButton onPress={this.goBack}  styles={styles} text={'Back'} color={blue}  />
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