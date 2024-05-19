    import { StyleSheet } from 'react-native'; 

    const listadoStyles = StyleSheet.create({ 
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
            marginTop: '1%',  // Ajusta este valor para mover el logo más arriba
            alignItems: 'center',
        }, 
        logoImage: { 
            width: 150, 
            height: 150, 
        }, 
        logoText: { 
            color: '#000', 
            textAlign: 'center', 
            fontSize: 30, 
            marginTop: 10, 
            fontWeight: 'bold', 
        }, 
        buttonContainer: { 
            marginTop: 10, 
            alignItems: 'center',
        },
        buttonGroup: { // Estilos para el grupo de botones
            flexDirection: 'row', // Alinear los botones en una fila
            justifyContent: 'space-around', // Espacio uniforme entre los botones
            marginBottom: 0, // Espacio inferior entre grupos de botones
        },
        lightButton: {
            backgroundColor: '#E0F7FA', // Un color más claro para los botones
            padding: 15,
            borderColor: '#000',
            borderWidth: 2,
            borderRadius: 30,
            alignItems: 'center',
            width: '80%',
        },
        lightButtonText: {
            color: '#020202', // Texto en color azul oscuro
            fontSize: 20,
        },
    }); 

    export default listadoStyles;
