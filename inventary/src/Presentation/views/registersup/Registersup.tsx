import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RoundedButton } from '../../component/RoundedButton';
import useViewModel from './viewModels';
import { CustomTextInput } from '../../component/CustomTextInput';
import styles from './Styles';

export const RegisterSupScreen = () => { // Cambiado el nombre del export
  const { name, description, price, stock, onChange, register } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondop.jpeg')}
        style={styles.imageBackground}
      />

      <View style={styles.form}>
        <Text style={styles.formText}>Registrar Proveedores</Text>

        <CustomTextInput
          image={require('../../../../assets/user.png')}
          placeholder='Nombre empresa o proveedor' /* Cambiado el placeholder */
          keyboardType='default'
          property='name' 
          onChangeText={onChange}
          value={name}
        />

        <CustomTextInput
          image={require('../../../../assets/desc.png')}
          placeholder='Dirección' /* Cambiado el placeholder */
          keyboardType='default'
          property='description' /* Cambiado el nombre del property */
          onChangeText={onChange}
          value={description} /* Cambiado el value */
        />

        <CustomTextInput
          image={require('../../../../assets/tel.png')}
          placeholder='Teléfono' /* Cambiado el placeholder */
          keyboardType='numeric' /* Cambiado el keyboardType */
          property='price' /* Cambiado el nombre del property */
          onChangeText={onChange}
          value={price} /* Cambiado el value */
        />

        <CustomTextInput
          image={require('../../../../assets/correo.png')}
          placeholder='Correo' /* Cambiado el placeholder */
          keyboardType='email-address' /* Cambiado el keyboardType */
          property='stock' /* Cambiado el nombre del property */
          onChangeText={onChange}
          value={stock} /* Cambiado el value */
        />
       
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => register()} />
        </View>

      </View>
    </View>
  );
};
