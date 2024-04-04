import { StyleSheet } from "react-native"; 
 
const HomeStyles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: 'black', 
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
    formText: { 
        fontWeight: 'bold', 
        fontSize: 16, 
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
        marginBottom: 20, 
    }, 
    logoContainer: { 
        position: 'absolute', 
        alignSelf: 'center', 
        top: '15%', 
    }, 
    logoImage: { 
        width: 150, 
        height: 150, 
    }, 
    logoText: { 
        color: 'white', 
        textAlign: 'center', 
        fontSize: 20, 
        marginTop: 10, 
        fontWeight: 'bold', 
    }, 
}); 
 
export default HomeStyles;