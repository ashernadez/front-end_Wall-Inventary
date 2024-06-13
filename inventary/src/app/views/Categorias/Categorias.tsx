import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useCategorias from '../../hooks/useCategorias';  
import styles from './styles';  

const Categorias = () => {
  const { categorias, loading, error } = useCategorias(); 
  const navigation = useNavigation();  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <LinearGradient
      colors={['#1E90FF', '#003366']}
      style={styles.container}
    >
      <ScrollView style={styles.body}>
        {categorias.map((categoria, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Id: {categoria.id}</Text>
            <Text style={styles.textList}>User ID: {categoria.user_id}</Text>
            <Text style={styles.textList}>Nombre: {categoria.Nombre}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonContainer}
      >
        <Text style={styles.ButtonText}>ATRAS</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Categorias;
