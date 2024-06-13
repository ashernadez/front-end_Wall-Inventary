import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useProductos from '../../hooks/useProductos';
import styles from './Styles';

const Productos = () => {
  const { productos, loading, error } = useProductos();
  const navigation = useNavigation();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#1E90FF', '#003366']}
      style={styles.container}
    >
      <ScrollView style={styles.body}>
        {productos.map((producto, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {producto.id}</Text>
            <Text style={styles.textList}>User_Id: {producto.user_id}</Text>
            <Text style={styles.textList}>Nombre: {producto.NombreP}</Text>
            <Text style={styles.textList}>Descripción: {producto.Descripcion}</Text>
            <Text style={styles.textList}>Precio: {producto.Precio}</Text>
            <Text style={styles.textList}>Stock: {producto.stock}</Text>
            <Text style={styles.textList}>Categoría ID: {producto.categoria_id}</Text>
            <Text style={styles.textList}>Proveedor ID: {producto.proveedor_id}</Text>
          </View>
        ))}

        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Productos;
