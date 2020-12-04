import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from "react-native";


export default function ActionButton(props) {
            
    return (
        <TouchableOpacity onPress={props.onPress}
         style={[props.styles.iosBtn, {backgroundColor:props.color}]}>
              <Text style={props.styles.submitBtnText}>{props.text}</Text>
            
        </TouchableOpacity>
    )
}
