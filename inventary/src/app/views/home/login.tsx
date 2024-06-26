import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import ViewModel from './viewModel';
import useUser from '../../hooks/useUser'; // Importa el hook useCompras
import { CustomTextInput } from '../../../Presentation/component/CustomTextInput';
import styles from './Styles';

export const HomeLoginScreen = () => {
        
    const { email, password, onChange } = ViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const floatAnimLogo = useRef(new Animated.Value(0)).current;
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [userValid, setUserValid] = useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    // Pasar a hooks o servicios
    const baseUrl: string = 'https://wallinventary.azurewebsites.net/api/';    
    const fetchLogin = async () => {
        try {
          const response = await fetch(baseUrl + 'user/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password_app: password
                })
            });            

          if (!response.ok) {
            console.log("Error al enviar el mensaje");
          }          

          const data = await response.json();                    
          return data["status"];                    
        } catch (err: any) {            
            return err.status;
        } 
    };
    ////


      
    const InicioSesion = async () => {               
        let result = await fetchLogin();

        if(result === 200){
            setUserValid(true);
          }else{
            setUserValid(false);
          }

        if(userValid){
            navigation.navigate('InicioScreen'); // Navega a InicioScreen
        }
        else{
            setUserValid(false);
        }
    };

    //
    useEffect(() => {
        if (userValid) {
            navigation.navigate('InicioScreen'); // Navega a InicioScreen
        }
    }, [userValid, navigation]);


    useEffect(() => {
        // Animación de flotación para el logo
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnimLogo, {
                    toValue: -10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnimLogo, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnimLogo, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
            {
                iterations: -1, // Hacer que la animación sea infinita
            }
        ).start();
    }, [floatAnimLogo]);



    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/Fondo4.jpeg')}
                style={styles.imageBackground}
            />
            <Animated.View style={[styles.logoContainer, { transform: [{ translateY: floatAnimLogo }] }]}>
                <Image
                    source={require('../../../../assets/newlogo.png')}
                    style={styles.logoImage}
                />
            </Animated.View>
            <View style={styles.form}>
                <Text style={styles.formText}>¡Inicia sesión con nosotros!</Text>
                <View style={styles.formContainer}>
                    <CustomTextInput
                        image={require('../../../../assets/usua.png')}
                        placeholder='Correo Electrónico'
                        keyboardType='default'
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/contra.png')}
                        placeholder='Contraseña'
                        keyboardType='default'
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={secureTextEntry}
                        toggleSecureEntry={toggleSecureEntry}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            //console.log('Correo Electrónico: ' + email);
                            //console.log('Password: ' + password);
                            InicioSesion();
                            //navigation.navigate('InicioScreen'); // Navega a InicioScreen
                        }}
                    >
                        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </View>
                {userValid ? (
                    <></>
                    ) : (
                        <Text style={styles.formText}></Text>
                    )}
                
            </View>
        </View>
    );
};
