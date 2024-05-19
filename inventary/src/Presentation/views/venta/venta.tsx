import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Agrega TouchableOpacity
import { RoundedButton } from '../../component/RoundedButton';
import useViewModel from './viewModel';
import styles from './Styles';
import { CustomTextInput } from '../../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import VentaStyles from './Styles';

const VentaScreen = () => {
    const { C_Venta, V_Venta, F_Venta, onChange, Venta } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/fondor.jpeg')}
                style={styles.imageBackground}
            />

            <View style={styles.form}>
                <Text style={styles.formText}>Registrar Venta</Text>

                <CustomTextInput
                    image={require('../../../../assets/cantidadV.png')}
                    placeholder='Cantidad Venta'
                    keyboardType='numeric'
                    property='C_Venta'
                    onChangeText={onChange}
                    value={C_Venta}
                />
                <CustomTextInput
                    image={require('../../../../assets/valorV.png')}
                    placeholder='Valor Compra'
                    keyboardType='numeric'
                    property='V_Venta'
                    onChangeText={onChange}
                    value={V_Venta}
                />

                <CustomTextInput
                    image={require('../../../../assets/fechaV.png')}
                    placeholder='Fecha'
                    keyboardType='default'
                    property='F_Venta'
                    onChangeText={onChange}
                    value={F_Venta}
                />

                <View style={VentaStyles.buttonContainer}>
                    {/* Botón de confirmación */}
                    <TouchableOpacity style={VentaStyles.confirmButton} onPress={Venta}>
                        <Text style={VentaStyles.confirmButtonText}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default VentaScreen;
