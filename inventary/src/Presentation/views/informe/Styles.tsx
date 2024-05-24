import { StyleSheet } from "react-native";

const InformeStyles = StyleSheet.create({ 
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
      height: '60%', 
      backgroundColor: '#E7EAEC', 
      position: 'absolute', 
      bottom: 0, 
      borderTopLeftRadius: 40, 
      borderTopRightRadius: 40, 
      padding: 30, 
    }, 
   
    formText: { 
      fontWeight: 'bold', 
      fontSize: 20, 
    },  
   
    formRegister: { 
      flexDirection: 'row', 
      justifyContent: 'center', 
      marginTop: 30, 
    }, 
   
    forminfoText: { 
      fontStyle: 'italic', 
      color: '#215598', 
      borderBottomWidth: 1, 
      borderBottomColor: '#215598', 
      fontWeight: 'bold', 
      marginLeft: 10, 
    }, 
    logoContainer: { 
      position: 'absolute', 
      alignSelf: 'center', 
      top: '5%', 
      alignItems: 'center', 
    }, 
    logoImage: { 
  width: 100, 
  height: 100, 
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

  export default InformeStyles;