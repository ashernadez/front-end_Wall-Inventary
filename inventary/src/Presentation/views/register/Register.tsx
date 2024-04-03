import React from 'react' 
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, 
TouchableOpacity } from 'react-native'; 
import { RoundedButton } from '../../component/RoundedButton'; 
import useViewModel from './viewModel'; 
import { CustomTextInput } from '../../component/CustomTextInput'; 
import styles from './Styles'
 
export const RegisterScreen = () => { 
  const { name, lastname, phone, email, onChange, 
register } = useViewModel(); 
 
  return ( 
    <View style={styles.container}> 
      <Image 
        source={require('../../../../assets/fondop.jpeg')} 
        style={styles.imageBackground} 
      /> 
 
      <View style={styles.form}> 
        <Text style={styles.formText}>Registrar Productos</Text> 
 
        <CustomTextInput 
          image={require('../../../../assets/prod.png')} 
          placeholder='Nombre producto' 
          keyboardType='default' 
          property='name' 
          onChangeText={onChange} 
          value={name} 
        /> 
 
        <CustomTextInput 
          image={require('../../../../assets/desc.png')} 
          placeholder='Descripcion' 
          keyboardType='default' 
          property='lastname' 
          onChangeText={onChange} 
          value={lastname} 
        /> 
 
        <CustomTextInput 
          image={require('../../../../assets/pre.png')} 
          placeholder='Precio' 
          keyboardType='numeric' 
          property='email' 
          onChangeText={onChange} 
          value={email} 
        /> 
 
        <CustomTextInput 
          image={require('../../../../assets/stock.png')} 
          placeholder='Stock' 
          keyboardType='numeric' 
          property='phone' 
          onChangeText={onChange} 
          value={phone} 
        /> 
       
        <View style={{ marginTop: 30 }}> 
          <RoundedButton text='CONFIRMAR' onPress={() => register()} /> 
        </View> 
 
      </View> 
    </View> 
  ); 
}  
 
