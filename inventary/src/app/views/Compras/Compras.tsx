import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import useCompras from '../../hooks/useCompras'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Actualizamos la importación
import styles from './styles';

const Compras = () => {
  const { compras, loading, error } = useCompras(); // Utiliza el hook useCompras para obtener las compras
  const navigation = useNavigation(); // Agregamos esta línea para obtener el objeto de navegación

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
        {compras.map((compra, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {compra.id}</Text>
            <Text style={styles.textList}>Proveedor ID: {compra.proveedor_id}</Text>
            <Text style={styles.textList}>Producto ID: {compra.producto_id}</Text>
            <Text style={styles.textList}>Precio de compra: {compra.v_compra}</Text>
            <Text style={styles.textList}>Fecha de compra: {compra.f_compra}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Compras;
