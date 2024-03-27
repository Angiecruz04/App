import { StyleSheet } from "react-native";
import { Mycolors } from "../temas/apptemas";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgfondo: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
        bottom: '8%'
    },
    forma: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    logocontainer: {
        position: 'absolute',
        bottom: '80%'
    },
    imglogo: {
        width: 100,
        height: 100,
        marginLeft: '60%',
    },
    formaRegistro: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    textRegistro: {
        marginLeft: 10,
        color: Mycolors.primary,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});



export const formaStyles = StyleSheet.create({
    login: {
        flex: 1,
        width: '100%',
        height: '37%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
    },
    textlogin: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export const formaInput = StyleSheet.create({
    input: {
        flexDirection: 'row',
        marginTop: 25,
    },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#AAAAAA",
        marginLeft: 10,
    },
    Iconinput: {
        width: 25,
        height: 25,
        marginTop: 5,
    }
})

export const btnStyles = StyleSheet.create({
    ButtonRound: {
        bottom: -8,
        width: '100%',
        height: 50,
        backgroundColor: Mycolors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});