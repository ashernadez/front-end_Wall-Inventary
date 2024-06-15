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
        color: 'white',
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
        backgroundColor: 'white',  // Color diferente
        width: 180,                   // Ancho del botón
        height: 50,                  // Altura del botón (igual que el ancho para hacerlo circular)
        borderRadius: 30,            // La mitad del ancho y alto para hacerlo circular
        justifyContent: 'center',    // Centrar el texto verticalmente
        alignItems: 'center',        // Centrar el texto horizontalmente
        marginBottom: 20,
    },
    buttonText: {
        color: '#171718',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Homestyles;
