import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, 
    TouchableOpacity } from 'react-native'; 
import { RoundedButton } from '../../component/RoundedButton'; 
import useViewModel from './viewModel'; 
import styles from './Styles'
import { CustomTextInput } from '../../component/CustomTextInput'; 
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../../../App';
import SupplierStyles from './Styles';


const SupplierScreen = () => {
    const { name, direccion, correo, telefono, onChange, 
        supplier} = useViewModel(); 
      const navigation = 
    useNavigation<StackNavigationProp<RootStackParamList>>(); 
          return ( 
            <View style={styles.container}> 
              <Image 
                source={require('../../../../assets/fondor.jpeg')} 
                style={styles.imageBackground} 
              /> 
         
              <View style={styles.form}> 
                <Text style={styles.formText}>Registrar Proveedores</Text> 
         
                <CustomTextInput 
                  image={require('../../../../assets/provee.png')} 
                  placeholder='Nombre proveedor' 
                  keyboardType='default' 
                  property='name' 
                  onChangeText={onChange} 
                  value={name} 
                /> 
         
                <CustomTextInput 
                  image={require('../../../../assets/direci.png')} 
                  placeholder='Direccion' 
                  keyboardType='default' 
                  property='direccion' 
                  onChangeText={onChange} 
                  value={direccion} 
                /> 
         
                <CustomTextInput 
                  image={require('../../../../assets/corre.png')} 
                  placeholder='Correo' 
                  keyboardType='default' 
                  property='correo' 
                  onChangeText={onChange} 
                  value={correo} 
                /> 
         
                <CustomTextInput 
                  image={require('../../../../assets/telef.png')} 
                  placeholder='Numero telefono' 
                  keyboardType='numeric' 
                  property='telefono' 
                  onChangeText={onChange} 
                  value={telefono} 
                /> 
               
               <View style={SupplierStyles.buttonContainer}>
                         {/* Botón de confirmación */}
                         <TouchableOpacity style={SupplierStyles.confirmButton} onPress={supplier}>
                             <Text style={SupplierStyles.confirmButtonText}>CONFIRMAR</Text>
                         </TouchableOpacity>
                     </View> 
            
  </View>
              </View> 
          ); 
}

export default SupplierScreen
