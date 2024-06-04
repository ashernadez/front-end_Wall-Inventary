import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import useCompras from '../../hooks/useCompras'; // Importa el hook useCompras
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Compras = () => {
  const { compras, loading, error } = useCompras(); // Utiliza el hook useCompras para obtener las compras

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  
  return (
    <LinearGradient
      colors={['#1E90FF', '#003366']} // Colores azules: azul oscuro y azul claro
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
       </ScrollView>
     </LinearGradient>
   );
};

export default Compras;
