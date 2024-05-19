import { StyleSheet, TextInput } from "react-native";

const CategoriaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  TextInput: {
    fontWeight: 'bold',
    fontSize: 20  ,
    color: '#333333',
    marginBottom: 20,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 20  ,
    color: '#333333',
    marginBottom: 20,
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

export default CategoriaStyles;