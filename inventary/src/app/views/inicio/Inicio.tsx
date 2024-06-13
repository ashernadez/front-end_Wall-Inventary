import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import InicioStyles from './Iniciostyles'; // Importar los estilos de Inicio

export const InicioScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
       <View style={InicioStyles.container}>
            <Image
                source={require('../../../../assets/fondor.jpeg')}
                style={InicioStyles.imageBackground}
            /> 
            <View style={InicioStyles.logoContainer}>
                <Text style={InicioStyles.logoText}>Bienvenido a Wall-Inventary</Text>
                <View style={InicioStyles.logoImage}>
                    <Image
                        source={require('../../../../assets/logosin.png')}
                        style={InicioStyles.imageBackground}
                    />
                </View>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Productos')}>
                    <Text style={InicioStyles.lightButtonText}>VER PRODUCTOS</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Proveedores')}>
                    <Text style={InicioStyles.lightButtonText}>VER PROVEEDORES</Text>
                </TouchableOpacity>
            </View>
            
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Categorias')}>
                    <Text style={InicioStyles.lightButtonText}>VER CATEGORIAS</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Ventas')}>
                    <Text style={InicioStyles.lightButtonText}>VER VENTAS</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Compras')}>
                    <Text style={InicioStyles.lightButtonText}>VER COMPRA</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('Informes')}>
                    <Text style={InicioStyles.lightButtonText}>VER INFORMES</Text>
                </TouchableOpacity>
            </View>

            
                    
            </View>

    );
}

