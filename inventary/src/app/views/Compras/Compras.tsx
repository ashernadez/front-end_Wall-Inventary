import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useCompras from '../../hooks/useCompras'; // Importa el hook useCompras
import styles from './styles'; // Importa los estilos

const Compras = () => {
  const { compras, loading, error } = useCompras(); // Usa el hook useCompras para obtener compras, loading y error
  const navigation = useNavigation(); // Obtiene la navegación desde React Navigation

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error en la solicitud: {error}</Text>;
  }

  const handlePress = () => {
    navigation.goBack(); // Función para manejar la navegación hacia atrás
  };

  return (
    <LinearGradient colors={['#1E90FF', '#003366']} style={styles.container}>
      <ScrollView style={styles.body}>
        {compras.map((compra) => (
          <View key={compra.id} style={styles.box}>
            <Text style={styles.textList}>ID: {compra.id}</Text>
            <Text style={styles.textList}>User ID: {compra.user_id}</Text>
            <Text style={styles.textList}>Valor de Compra: ${compra.v_compra}</Text>
            <Text style={styles.textList}>Fecha de Compra: {compra.f_compra}</Text>
            <Text style={styles.textList}>ID de Producto: {compra.producto_id}</Text>
            <Text style={styles.textList}>Cantidad de Compra: {compra.c_compra}</Text>
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
