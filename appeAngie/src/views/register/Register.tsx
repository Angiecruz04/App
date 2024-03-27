import React from "react";
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { ButtonRound } from '../../componentes/buttonRound';
import { btnStyles, styles } from '../../estilos/style';
import { styleR, formaInput } from "../../estilos/styles-register";

export const RegisterScreen = () => {

    return (

        <View style={styles.container}>
      <Image source={require ('../../../assets/porsche.jpeg')}
      style={styles.imgfondo}/>

      <View style={styleR.login}>
        <Text style={styleR.textlogin}> Registrarse </Text>

        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/persona.png')}/>
          <TextInput
          style={formaInput.textInput}
          placeholder='Nombres'
          keyboardType='default' />
        </View>
        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/persona1.png')}/>
          <TextInput
          style={formaInput.textInput}
          placeholder='Apellidos'
          keyboardType='default' />
        </View>
        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/email.png')}/>
          <TextInput
          style={formaInput.textInput}
          placeholder='Ingrese un correo electronico'
          keyboardType='email-address' />
        </View>
        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/number.png')}/>
          <TextInput
          style={formaInput.textInput}
          placeholder='Telefono'
          keyboardType="numeric" />
        </View>
        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/Key.png')} />
          <TextInput
          style={formaInput.textInput}
          placeholder='Contraseña'
          keyboardType='default'
          secureTextEntry={true} />
        </View>

        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/Key1.png')} />
          <TextInput
          style={formaInput.textInput}
          placeholder='Confirme su contraseña'
          keyboardType='default'
          secureTextEntry={true} />
        </View>
        
<View>
  <ButtonRound text="Registrarse"
  onPress={() => ToastAndroid.show("Registro Completado!", ToastAndroid.LONG)}/>
</View>


</View>
    </View>
    )
}
