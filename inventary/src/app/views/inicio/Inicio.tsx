import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
        <ScrollView>
            <View style={InicioStyles.container}>
                <Image
                    source={require('../../../../assets/Fondo4.jpeg')}
                    style={InicioStyles.imageBackground}
                /> 
               
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
            </View>
        </ScrollView>
    );
}
