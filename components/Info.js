import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { white } from '../utils/colors'

export default function Info(props) {
   
    return (
        <TouchableOpacity onPress={props.onPress} >
             <Text style={ {color:white}}>{props.text}</Text>
           
       </TouchableOpacity>
    )
}
