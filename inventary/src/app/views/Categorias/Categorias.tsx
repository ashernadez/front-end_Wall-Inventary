import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation
import useCategorias from '../../hooks/useCategorias';
import styles from './styles';

const Categorias = () => {
  const { categorias, loading, error } = useCategorias();
  const navigation = useNavigation(); // Obtiene la navegación

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
        {categorias.map((categoria, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {categoria.id}</Text>
            <Text style={styles.textList}>Nombre: {categoria.Nombre}</Text>
            <Text style={styles.textList}>created_at: {categoria.created_at}</Text>
            <Text style={styles.textList}>updated_at: {categoria.updated_at}</Text>
          </View>
        ))}

        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>ATRAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Categorias;
