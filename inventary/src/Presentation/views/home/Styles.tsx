import { StyleSheet } from "react-native"; 

const Homestyles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#FFFFFF', 
    }, 
    imageBackground: { 
        width: '100%', 
        height: '100%', 
        opacity: 0.7, 
        bottom: '30%', 
    }, 
    form: { 
        width: '100%', 
        height: '50%', 
        backgroundColor: '#E7EAEC', 
        position: 'absolute', 
        bottom: 0, 
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
        padding: 30,
    },
    formContainer: { 
        backgroundColor: 'white', // Fondo blanco para el recuadro
        borderRadius: 30, 
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
        marginTop: 30,
    },
    formText: { 
        fontWeight: 'bold', 
        fontSize: 28, 
        
    }, 

    logoContainer: { 
        position: 'absolute', 
        alignSelf: 'center', 
        top: '13%', 
    }, 
    logoImage: { 
        width: 150, 
        height: 150, 
    }, 
    logoText: { 
        color: '#000', // Cambiar el color del texto a negro
        textAlign: 'center', 
        fontSize: 20, 
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