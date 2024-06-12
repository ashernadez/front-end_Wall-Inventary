  import React from 'react';
  import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
  import useInformes from '../../hooks/useInforme'; // Importa el hook useInformes
  import { LinearGradient } from 'expo-linear-gradient';
  import { useNavigation } from '@react-navigation/native';
  import styles from './Styles';

  const Informes = () => {
    const { informes, loading, error } = useInformes(); 
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
          {informes.map((informe, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.textList}>Id: {informe.id}</Text>
              <Text style={styles.textList}>Tipo: {informe.tipo}</Text>
              <Text style={styles.textList}>Fecha: {informe.fecha_i}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
            <Text style={styles.ButtonText}>ATRÁS</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  };

  export default Informes;
