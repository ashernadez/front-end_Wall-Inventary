import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50, // Ajusta el margen según sea necesario

    },
    logoImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 27,
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 100, // Ajusta el margen según sea necesario
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

export default styles;
