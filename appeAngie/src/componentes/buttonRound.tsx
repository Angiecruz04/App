import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { btnStyles } from '../estilos/style'

interface Props {
    text: String,
    onPress: () => void
}


export const ButtonRound = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity style ={btnStyles.ButtonRound}
        onPress={() => onPress()}
        >

        <Text style={btnStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
        
    )
}
