import { StyleSheet } from "react-native";

const Homestyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageBackground: {
        width: '150%',
        height: '150%',
        bottom: '30%',
    },
    form: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formContainer: {
        padding: 10,
        marginTop: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '8%', // Ajustar la posición vertical del logo
    },
    logoImage: {
        width: 210, // Aumentar el tamaño del logo
        height: 210, // Aumentar el tamaño del logo
    },
    logoText: {
        color: 'white', // Cambiar el color del texto a negro
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1296DC', // Color del botón claro
        padding: 15,
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        width: '50%',
    },
    buttonText: {
        color: '#020202', // Texto en color azul oscuro
        fontSize: 17,
    },
});

export default Homestyles;
