import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useVentas from '../../hooks/useVentas';  // Importa el hook useVentas
import styles from './styles';  // Importa los estilos

const Ventas = () => {
  const { ventas, loading, error } = useVentas();  // Usa el hook useVentas para obtener ventas, loading y error
  const navigation = useNavigation();  // Obtiene la navegación desde React Navigation

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const handlePress = () => {
    navigation.goBack();  // Función para manejar la navegación hacia atrás
  };

  return (
    <LinearGradient
      colors={['#1E90FF', '#003366']}
      style={styles.container}
    >
      <ScrollView style={styles.body}>
        {ventas.map((venta, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {venta.id}</Text>
            <Text style={styles.textList}>Valor de la Venta: {venta.v_venta}</Text>
            <Text style={styles.textList}>Fecha de Venta: {venta.f_venta}</Text>
            <Text style={styles.textList}>Producto ID: {venta.producto_id}</Text>
            <Text style={styles.textList}>Cantidad de Compra: {venta.c_compra}</Text>
            <Text style={styles.textList}>created_at: {venta.created_at}</Text>
            <Text style={styles.textList}>updated_at: {venta.updated_at}</Text>
          </View>
        ))}

        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Ventas;
