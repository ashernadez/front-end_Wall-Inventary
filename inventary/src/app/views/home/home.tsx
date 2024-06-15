import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './stylesHome';

export const HomeScreen = () => {
    const navigation = useNavigation();
    const fadeIn = useRef(new Animated.Value(0)).current;
    const zoomIn = useRef(new Animated.Value(0.5)).current; // Valor inicial para la animación de zoom
    const floatAnimLogo = useRef(new Animated.Value(0)).current; // Valor inicial para la animación de flotación del logo

    useEffect(() => {
        // Animación de desvanecimiento
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();

        // Animación de zoom
        Animated.timing(zoomIn, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

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
    }, [fadeIn, zoomIn, floatAnimLogo]);

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Verificación: HomeScreen Rendered</Text>
            <Image
                source={require('../../../../assets/Fondo5.jpg')}
                style={styles.imageBackground}
            />
            <Animated.View style={[styles.logoContainer, { transform: [{ translateY: floatAnimLogo }] }]}>
                <Image
                    source={require('../../../../assets/logoblanco.png')}
                    style={styles.logoImage}
                />
            </Animated.View>
            <Animated.Text style={[styles.welcomeText, { opacity: fadeIn, transform: [{ scale: zoomIn }] }]}>
                ¡Bienvenido a Wall-Inventary, tu fuente de inventario más confiable!
            </Animated.Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('HomeLoginScreen' as never)}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
