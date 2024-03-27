import React from 'react';
import { View,Image,TextInput,StyleSheet,KeyboardType, } from 'react-native';
import { formaInput, styles } from '../../estilos/style'

// Declaramos las propiedades pasaremos el componente CustomTextInput


interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType:KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onchangeText:(property:string,value:any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onchangeText

}: Props) => {
    return (
        <View style={formaInput.input}>
            <Image
                style ={formaInput.Iconinput}
                source={image}
            />  
            <TextInput
                style = {formaInput.textInput}
                placeholder= {placeholder}
                keyboardType= {keyboardType}
                value= {value}
                onChangeText={Text => onchangeText(property,Text)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
