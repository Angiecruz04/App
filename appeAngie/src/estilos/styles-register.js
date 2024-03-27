import { StyleSheet } from "react-native";
import { Mycolors } from "../temas/apptemas";

export const styleR = StyleSheet.create({
    login: {
        width: '100%',
        height: '68%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 32,
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
        height: 40,
        backgroundColor: Mycolors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});