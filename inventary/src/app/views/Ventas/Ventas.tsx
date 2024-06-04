// views/Ventas/Ventas.tsx
import React from 'react';
import { ScrollView, View, Text, ActivityIndicator,TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import useVentas from '../../hooks/useVentas'; 
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const Ventas = () => {
  const { ventas, loading, error } = useVentas(); 
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
      colors={['#1E90FF', '#003366']} // Colores azules: azul oscuro y azul claro
      style={styles.container}
    >
      <ScrollView style={styles.body}>
        {ventas.map((venta, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {venta.id}</Text>
            <Text style={styles.textList}>Valor Venta: {venta.v_venta}</Text>
            <Text style={styles.textList}>Fecha: {venta.f_venta}</Text>
            <Text style={styles.textList}>Producto ID: {venta.producto_id}</Text>
            <Text style={styles.textList}>Cantidad: {venta.c_compra}</Text>
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
