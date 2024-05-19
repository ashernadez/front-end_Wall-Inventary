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
import ProductoStyles from './Styles';

export const ProductoScreen = () => { 
  const { name, description, stock, price, onChange, 
producto } = useViewModel(); 
const navigation = 
useNavigation<StackNavigationProp<RootStackParamList>>(); 
  return ( 
    <View style={styles.container}> 
      <Image 
        source={require('../../../../assets/fondor.jpeg')} 
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
       
       <View style={ProductoStyles.buttonContainer}>
                         {/* Botón de confirmación */}
                         <TouchableOpacity style={ProductoStyles.confirmButton} onPress={producto}>
                             <Text style={ProductoStyles.confirmButtonText}>CONFIRMAR</Text>
                         </TouchableOpacity>
                     </View>
      </View> 
    </View> 
  ); 
}  
 
export default ProductoScreen