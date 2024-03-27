import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { styles, formaStyles, formaInput } from '../../estilos/style';
import { ButtonRound } from '../../componentes/buttonRound';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';


export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


return (
    <View style={styles.container}>
      <Image source={require ('../../../assets/porsche.jpeg')}
      style={styles.imgfondo}/>

      <View style={styles.logocontainer}>
      <Image source={require ('../../../assets/descarga.png')}
      style={styles.imglogo}/>
      </View>

      <View style={formaStyles.login}>
        <Text style={formaStyles.textlogin}> Ingresar </Text>

        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/email.png')}/>
          <TextInput
          style={formaInput.textInput}
          placeholder='Ingrese el correo electronico'
          keyboardType='email-address' />
        </View>

        <View style={formaInput.input}>
          <Image style={formaInput.Iconinput}
          source={require ('../../../assets/Key.png')} />
          <TextInput
          style={formaInput.textInput}
          placeholder='Digite su contraseña'
          keyboardType='default'
          secureTextEntry={true} />
        </View>
        
<View>
  <ButtonRound text="Ingresar"
  onPress={() => ToastAndroid.show("Saludos", ToastAndroid.LONG)}/>
</View>

<View style={styles.formaRegistro}>
  <Text>No tienes usuario ?</Text>
  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
<Text style={styles.textRegistro}>Registrarse</Text>
</TouchableOpacity>
</View>



      </View>
    </View>
  );
}