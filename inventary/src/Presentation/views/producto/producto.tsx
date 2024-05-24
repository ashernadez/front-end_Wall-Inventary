import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CustomTextInput } from '../../component/CustomTextInput';
import useViewModel from './viewModel';
import styles from './Styles';
import ProductoStyles from './Styles';

export const ProductoScreen = () => {
  const { NombreP, Descripcion, stock, precio, Categoria, onChange, producto } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondor.jpeg')}
        style={styles.imageBackground}
      />

      <View style={styles.form}>
        <Text style={styles.formText}>Registrar Productos</Text>

        <CustomTextInput
          image={require('../../../../assets/product.png')}
          placeholder='Nombre producto'
          keyboardType='default'
          property='NombreP'
          onChangeText={onChange}
          value={NombreP}
        />

        <CustomTextInput
          image={require('../../../../assets/descrip.png')}
          placeholder='Descripcion'
          keyboardType='default'
          property='Descripcion'
          onChangeText={onChange}
          value={Descripcion}
        />

        <CustomTextInput
          image={require('../../../../assets/preci.png')}
          placeholder='Precio'
          keyboardType='numeric'
          property='precio'
          onChangeText={onChange}
          value={precio}
        />

        <CustomTextInput
          image={require('../../../../assets/Stoc.png')}
          placeholder='Stock'
          keyboardType='numeric'
          property='stock'
          onChangeText={onChange}
          value={stock}
        />

        <CustomTextInput
          image={require('../../../../assets/catego.png')}
          placeholder='Categoria'
          keyboardType='default'
          property='Categoria'
          onChangeText={onChange}
          value={Categoria}
        />


        <View style={ProductoStyles.buttonContainer}>
          {/* Botón de confirmación */}
          <TouchableOpacity style={ProductoStyles.confirmButton} onPress={producto}>
            <Text style={ProductoStyles.confirmButtonText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductoScreen;
