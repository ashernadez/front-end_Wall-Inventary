import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Importamos TouchableOpacity desde react-native
import { RoundedButton } from '../../component/RoundedButton';
import useViewModel from './viewModel';
import CategoriaStyles from './categoriaStyles';
import { CustomTextInput } from '../../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

const CategoriaScreen = () => {
    const { N_Categoria, onChange, Categoria } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={CategoriaStyles.container}>
            <Image
                source={require('../../../../assets/fondor.jpeg')}
                style={CategoriaStyles.imageBackground}
            />
            <View style={CategoriaStyles.form}>
                <Text style={CategoriaStyles.formText}>Ingresar Categoria</Text>
                <CustomTextInput 
                  image={require('../../../../assets/categori.png')} 
                  placeholder='Nombre de la Categoria' 
                  keyboardType='default' 
                  property='N_Categoria' 
                  onChangeText={onChange} 
                  value={N_Categoria} 
                /> 


                
               <View style={CategoriaStyles.buttonContainer}>
    {/* Botón de confirmación */}
    <TouchableOpacity style={CategoriaStyles.confirmButton} onPress={Categoria}>
        <Text style={CategoriaStyles.confirmButtonText}>CONFIRMAR</Text>
    </TouchableOpacity>
</View>
            </View>
        </View>
    );
};

export default CategoriaScreen;
