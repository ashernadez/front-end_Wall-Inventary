import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation
import useProveedores from '../../hooks/useProveedores';
import styles from './styles';

const Proveedores = () => {
  const { proveedores, loading, error } = useProveedores(); 
  const navigation = useNavigation(); // Obtiene la navegación

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  
  const handlePress = () => {
    navigation.goBack(); // Navega hacia atrás
  };

  return (
    <LinearGradient
      colors={['#1E90FF', '#003366']} // Colores azules: azul oscuro y azul claro
      style={styles.container}
    >
      <ScrollView style={styles.body}>
        {proveedores.map((proveedor, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {proveedor.id}</Text>
            <Text style={styles.textList}>Nombre: {proveedor.nombre}</Text>
            <Text style={styles.textList}>Teléfono: {proveedor.telefono}</Text>
            <Text style={styles.textList}>Dirección: {proveedor.direccion}</Text>
            <Text style={styles.textList}>Correo: {proveedor.correo}</Text>
          </View>
        ))}
        {/* Agregar el enlace */}
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Proveedores;
