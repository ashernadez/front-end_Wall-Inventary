import React from 'react';
import { StyleSheet, ScrollView, View, Text, ActivityIndicator } from 'react-native';
import useProductos from '../../hooks/useProductos';

const Productos = () => {
  const { productos, loading, error } = useProductos();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.body}>
        {productos.map((producto, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textList}>Nombre: {producto.NombreP}</Text>
            <Text style={styles.textList}>Descripción: {producto.Descripcion}</Text>
            <Text style={styles.textList}>Precio: {producto.Precio}</Text>
            <Text style={styles.textList}>Stock: {producto.stock}</Text>
            <Text style={styles.textList}>Categoría ID: {producto.categoria_id}</Text>
            <Text style={styles.textList}>Proveedor ID: {producto.proveedor_id}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    height: 250,
    width: 180,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 5,
  },
  textList: {
    fontSize: 16,
    color: 'blue',
  },
  image: {
    width: 136,
    height: 108,
  },
});

export default Productos;
