import React, { useState} from 'react'; 
import { useNavigation } from '@react-navigation/native'; 
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, 
TouchableOpacity } from 'react-native'; 
import { RoundedButton } from '../../component/RoundedButton'; 
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../../../App'; 
import useViewModel  from './viewModel'; 
import { CustomTextInput } from '../../component/CustomTextInput'; 
import styles from './Styles'
 
export const HomeScreen = () => { 
    const {email, password, onChange} = useViewModel(); 
    const navigation = 
useNavigation<StackNavigationProp<RootStackParamList>>(); 
 
    return ( 
        <View style={styles.container}> 
            <Image 
                source={require('../../../../assets/fondop.jpeg')} 
                style={styles.imageBackground} 
            /> 
            <View style={styles.logoContainer}> 
                <Image 
                    source={require('../../../../assets/logocon.png')} 
                    style={styles.logoImage} 
                /> 
                <Text style={styles.logoText}>Wall-Inventary</Text> 
            </View> 
 
            <View style={styles.form}> 
                <Text style={styles.formText}>Ingresar</Text> 
 
                <CustomTextInput  
                    image= {require('../../../../assets/usua.png')} 
                    placeholder='Numero documento' 
                    keyboardType='numeric' 
                    property='email' 
                    onChangeText={onChange} 
                    value={email} 
                /> 
                <CustomTextInput  
                    image= {require('../../../../assets/contra.png')} 
                    placeholder='Contraseña' 
                    keyboardType='default' 
                    property='password' 
                    onChangeText={onChange} 
                    value={password} 
              secureTextEntry={true} 
 
                /> 
 
                <View style={{ marginTop: 30 }}> 
                    <RoundedButton text='ENTRAR' onPress={() =>{ 
                        console.log('Document: ' + email); 
                        console.log('Password: ' + password); 
                    }} /> 
                </View> 
 
                <View style={styles.formRegister}> 
  <View style={styles.formRegister}> 
    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}> 
      <Text style={styles.formRegisterText}>Regístrar producto</Text> 
    </TouchableOpacity> 
  </View>
  <View style={styles.formRegister}>
    <TouchableOpacity onPress={() => navigation.navigate('SupplierScreen')}> 
      <Text style={styles.formRegisterText}>Regístrar proveedor</Text> 
    </TouchableOpacity>
  </View>
</View>

 
            </View> 
        </View> 
    ); 
} 
