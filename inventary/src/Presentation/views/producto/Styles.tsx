

import { StyleSheet } from "react-native";

const ProductoStyles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: 'white', 
    }, 
     
    imageBackground: { 
      width: '100%', 
      height: '100%', 
      opacity: 0.7, 
      bottom: '30%', 
    }, 
   
    form: { 
      width: '100%', 
      height: '70%', 
      backgroundColor: '#E7EAEC', 
      position: 'absolute', 
      bottom: 0, 
      borderTopLeftRadius: 40, 
      borderTopRightRadius: 40, 
      padding: 30, 
    }, 
   
    formText: { 
      fontWeight: 'bold', 
      fontSize: 25, 
    },
   
    formProducto: { 
      flexDirection: 'row', 
      justifyContent: 'center', 
      marginTop: 30, 
    },
    buttonContainer: {
      marginTop: 30,
      alignItems: 'center',
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
  confirmButton: {
    backgroundColor: '#1296DC', // Cambiar el color del botón aquí
    padding: 15,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 40,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20, // Ajusta este margen según sea necesario
  },
  confirmButtonText: {
    color: '#020202', // Texto en color azul oscuro
    fontSize: 18,
  },
});

export default ProductoStyles;