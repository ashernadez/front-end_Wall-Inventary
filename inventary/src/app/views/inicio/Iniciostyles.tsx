import { StyleSheet } from 'react-native'; 

const InicioStyles = StyleSheet.create({ 
    container: { 
        flex: 1,  
    }, 
    imageBackground: { 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0,
        left: 0,
    }, 
    logoContainer: { 
        alignSelf: 'center', 
        marginTop: '5%',  // Ajusta este valor para mover el logo más arriba
        alignItems: 'center',
    }, 
    logoImage: { 
        width: 150, 
        height: 150,
    }, 
    logoText: { 
        color: 'white', 
        textAlign: 'center', 
        fontSize: 26, 
        marginTop: -2, 
        fontWeight: 'bold', 
    }, 
    buttonContainer: { 
        marginTop: 30, 
        marginBottom: 45,
        alignItems: 'center',
    },
    buttonGroup: { // Estilos para el grupo de botones
        flexDirection: 'row', // Alinear los botones en una fila
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 1, // Añadir un borde negro
        justifyContent: 'space-around', // Espacio uniforme entre los botones
    },
    lightButton: {
        backgroundColor: '#E0F7FA', // Cambiar el color del botón aquí
        padding: 15,
        fontSize: 13,
        borderColor:'#000',
        borderWidth: 2,
        borderRadius: 40,
        alignItems: 'center',
        width: '80%',
    },
    specialButton:{
        backgroundColor: '#1296DC', // Cambiar el color del botón aquí
        padding: 15,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 40,
        alignItems: 'center',
        width: '30%',
    },
    lightButtonText: {
        color: '#020202', // Texto en color azul oscuro
        fontSize: 18,

    },
}); 

export default InicioStyles;

