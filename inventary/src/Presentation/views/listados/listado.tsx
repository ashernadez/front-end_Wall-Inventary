import React, { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native'; 
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../../../App'; 
import styles from './listadostyles';

export const ListadoScreen = () => { 
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return ( 
        <View style={styles.container}> 
            <Image 
                source={require('../../../../assets/fondor.jpeg')} 
                style={styles.imageBackground} 
            /> 
            <View style={styles.logoContainer}> 
                <Text style={styles.logoText}>Listados</Text> 
                <View style={styles.logoImage}>
                    <Image 
                        source={require('../../../../assets/logosin.png')} 
                        style={styles.imageBackground} 
                    />  
                </View>
            </View> 
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListProdScreen')}>
                    <Text style={styles.lightButtonText}>listado de Productos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListProvScreen')}>
                    <Text style={styles.lightButtonText}>listado de Proveedores</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListCategoScreen')}>
                    <Text style={styles.lightButtonText}>Lista de Categorias</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListVentaScreen')}>
                    <Text style={styles.lightButtonText}>Lista de Ventas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListInfoScreen')}>
                    <Text style={styles.lightButtonText}>Lista de Informes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.lightButton} onPress={() => navigation.navigate('ListComScreen')}>
                    <Text style={styles.lightButtonText}>Lista de Compras</Text>
                </TouchableOpacity>
            </View>
        </View> 
    ); 
}
