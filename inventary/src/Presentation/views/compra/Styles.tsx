import { StyleSheet } from "react-native";

const CompraStyles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: '#000', 
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
   
    formIcon: { 
      width: 25, 
      height: 25, 
      marginTop: 5, 
    }, 
   
    formInput: { 
      flexDirection: 'row', 
      marginTop: 25, 
    }, 
   
    formTextInput: { 
      flex: 1, 
      borderBottomWidth: 1, 
      borderBottomColor: '#AAAAAA', 
      marginLeft: 15, 
    }, 
   
    formRegister: { 
      flexDirection: 'row', 
      justifyContent: 'center', 
      marginTop: 30, 
    }, 
   
    formRegisterText: { 
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
  logoText: { 
  color: 'white', 
  textAlign: 'center', 
  fontSize: 20, 
  marginTop: 10, 
  fontWeight: 'bold', 
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

  export default CompraStyles;