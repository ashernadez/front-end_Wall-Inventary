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
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('ProductoScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar Productos</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('SupplierScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar Proveedores</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('CategoriaScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar Categorías</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('VentaScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar Ventas</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('InformeScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar Informes</Text>
                </TouchableOpacity>
            </View>
            <View style={InicioStyles.buttonContainer}>
                <TouchableOpacity style={InicioStyles.lightButton} onPress={() => navigation.navigate('CompraScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Registrar  Compras</Text>
                </TouchableOpacity>
            </View>

            <View style={InicioStyles.buttonContainer}>
                {/* Aquí aplicamos el estilo adicional para el botón "Listados" */}
                <TouchableOpacity style={InicioStyles.specialButton} onPress={() => navigation.navigate('ListadoScreen')}>
                    <Text style={InicioStyles.lightButtonText}>Listados</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

