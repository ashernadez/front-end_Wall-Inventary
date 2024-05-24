import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Styles';

const ListProdScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.row}>
            <Text style={[styles.text, styles.header]}>Id |</Text>
            <Text style={[styles.text, styles.header]}> Nombre del Producto |</Text>
            <Text style={[styles.text, styles.header]}> Descripción |</Text>
            <Text style={[styles.text, styles.header]}> Precio |</Text>
            <Text style={[styles.text, styles.header]}> Stock</Text>
          </View>
          {/* Puedes agregar más filas de datos aquí */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListProdScreen;
