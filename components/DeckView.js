import React from "react";
import { Animated,Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getData, getDatas } from "../utils/api";
import { lightPurp, pink, purple, white } from "../utils/colors";
import { getCardSize } from "../utils/helpers";
import ActionButton from "./ActionButton";

class DeckView extends React.Component {
      
  state = {
    animation: new Animated.Value(0.5),
    rotate: new Animated.Value(0)
}    
componentDidMount(){
  this.handleAnimaion()
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
    const deck = this.props.route.params.deck
    const decks = this.props.decks
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
    
    return (
      <View style={ styles.container }>
        <View style={ styles.card }>
        <Animated.View style={animatedStyle}>
          <Text style={ styles.cardText }>{decks[deck].title}</Text>
       </Animated.View>
          
       <Animated.View style={rotateStyles}>
         <Text style={ styles.cardText }>{decks[deck].questions? getCardSize(decks[deck].questions): null}</Text>
       </Animated.View>
       <ActionButton styles={styles} text='Add Card' onPress={()=>this.props.navigation.navigate('AddCard',{deck:deck})} color={purple} />
      

       <ActionButton styles={styles} text='Take Quiz' onPress={()=>{decks[deck].questions.length != 0 ? this.props.navigation.navigate('Quiz',{deck:deck}):false}} color={lightPurp} />
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