import React from 'react' 
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, 
TouchableOpacity } from 'react-native'; 
import { RoundedButton } from '../../component/RoundedButton'; 
import useViewModel from './viewModel'; 
import { CustomTextInput } from '../../component/CustomTextInput'; 
import styles from './Styles'
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../../../App';

export const RegisterScreen = () => { 
  const { name, description, stock, price, onChange, 
register } = useViewModel(); 
const navigation = 
useNavigation<StackNavigationProp<RootStackParamList>>(); 
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
          property='description' 
          onChangeText={onChange} 
          value={description} 
        /> 
 
        <CustomTextInput 
          image={require('../../../../assets/pre.png')} 
          placeholder='Precio' 
          keyboardType='numeric' 
          property='price' 
          onChangeText={onChange} 
          value={price} 
        /> 
 
        <CustomTextInput 
          image={require('../../../../assets/stock.png')} 
          placeholder='Stock' 
          keyboardType='numeric' 
          property='stock' 
          onChangeText={onChange} 
          value={stock} 
        /> 
       
        <View style={{ marginTop: 30 }}> 
          <RoundedButton text='CONFIRMAR' onPress={() => register()} /> 
        </View> 
        <View style={styles.formRegister}>
    <TouchableOpacity onPress={() => navigation.navigate('ListProdScreen')}> 
      <Text style={styles.formRegisterText}>Mostrar Productos</Text> 
    </TouchableOpacity>
  </View>
      </View> 
    </View> 
  ); 
}  
 
export default RegisterScreen