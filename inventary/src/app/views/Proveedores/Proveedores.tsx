import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useProveedores from '../../hooks/useProveedores';  // Importa el hook useProveedores
import styles from './Styles';  // Importa los estilos

const Proveedores = () => {
  const { proveedores, loading, error } = useProveedores();  // Usa el hook useProveedores para obtener proveedores, loading y error
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
        {proveedores.map((proveedor, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {proveedor.id}</Text>
            <Text style={styles.textList}>Nombre: {proveedor.nombre}</Text>
            <Text style={styles.textList}>Teléfono: {proveedor.telefono}</Text>
            <Text style={styles.textList}>Dirección: {proveedor.direccion}</Text>
            <Text style={styles.textList}>Correo: {proveedor.correo}</Text>
            <Text style={styles.textList}>created_at: {proveedor.created_at}</Text>
            <Text style={styles.textList}>updated_at: {proveedor.updated_at}</Text>
          </View>
        ))}

        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRÁS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Proveedores;
