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
    buttonContainer: {
        marginTop: 30,
        marginBottom: 29,
        alignItems: 'center',
    },
    lightButton: {
        backgroundColor: '#E0F7FA', // Cambiar el color del botón aquí
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, // Añadir espacio entre botones
        elevation: 3, // Sombra para efecto de elevación
    },
    lightButtonText: {
        color: '#020202', // Texto en color azul oscuro
        fontSize: 18,
        fontWeight: 'bold', // Hacer el texto más negrita
    },
    specialButton: {
        backgroundColor: '#1296DC', // Cambiar el color del botón aquí
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, // Añadir espacio entre botones
        elevation: 3, // Sombra para efecto de elevación
    },
});

export default InicioStyles;
