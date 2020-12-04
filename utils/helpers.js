import React from 'react'
import {View,Text} from 'react-native'

export const getCardSize = (questions) =>{
if(questions.length === 0){
    return <Text>0 card</Text>
}else if (questions.length > 0)
{
    return <Text>{questions.length} cards</Text>
}else{
    return <Text>1 card</Text>
}

}