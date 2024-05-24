import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Styles';

const ListProvScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.row}>
            <Text style={[styles.text, styles.header]}>Id |</Text>
            <Text style={[styles.text, styles.header]}> Nombre del Proveedor |</Text>
            <Text style={[styles.text, styles.header]}> Dirección |</Text>
            <Text style={[styles.text, styles.header]}> Teléfono |</Text>
            <Text style={[styles.text, styles.header]}> Correo </Text>
          </View>
          {/* Puedes agregar más filas de datos aquí */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListProvScreen;
