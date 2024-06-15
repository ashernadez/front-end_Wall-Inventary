import React, { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import ViewModel from './viewModel';
import { CustomTextInput } from '../../../Presentation/component/CustomTextInput';
import styles from './Styles';

export const HomeLoginScreen = () => {
    const { documento, password, onChange } = ViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/Fondo4.jpeg')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logoblanco.png')}
                    style={styles.logoImage}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>¡Inicia sesion con nosotros!</Text>
                <View style={styles.formContainer}>
                    <CustomTextInput
                        image={require('../../../../assets/usua.png')}
                        placeholder='Numero documento'
                        keyboardType='numeric'
                        property='documento'
                        onChangeText={onChange}
                        value={documento}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/contra.png')}
                        placeholder='Contraseña'
                        keyboardType='default'
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            console.log('Document: ' + documento);
                            console.log('Password: ' + password);
                            navigation.navigate('InicioScreen'); // Navega a InicioScreen
                        }}
                    >
                        <Text style={styles.buttonText}>INICIAR SESION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
