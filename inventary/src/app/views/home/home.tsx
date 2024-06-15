import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './stylesHome';

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Verificación: HomeScreen Rendered</Text>
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
            <Text style={styles.welcomeText}>¡Bienvenido a Wall-Inventary, tu fuente de inventario más confiable!</Text>
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
