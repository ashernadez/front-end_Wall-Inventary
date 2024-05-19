import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../component/RoundedButton';
import useViewModel from './viewModel';
import styles from './Styles';
import { CustomTextInput } from '../../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import CompraStyles from './Styles';

const CompraScreen = () => {
    const { cantidad, Valor, Fecha, onChange, Compra } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/fondor.jpeg')}
                style={styles.imageBackground}
            />

            <View style={styles.form}>
                <Text style={styles.formText}>Registrar Compra</Text>

                <CustomTextInput
                    image={require('../../../../assets/cantidad.png')}
                    placeholder='Cantidad de Compra'
                    keyboardType='default'
                    property='cantidad'
                    onChangeText={onChange}
                    value={cantidad}
                />

                <CustomTextInput
                    image={require('../../../../assets/signo pesos.png')}
                    placeholder='Valor Compra'
                    keyboardType='default'
                    property='Valor'
                    onChangeText={onChange}
                    value={Valor}
                />
                <CustomTextInput
                    image={require('../../../../assets/fecha.png')}
                    placeholder='Fecha'
                    keyboardType='default'
                    property='Fecha'
                    onChangeText={onChange}
                    value={Fecha}
    />
                                       <View style={CompraStyles.buttonContainer}>
                         {/* Botón de confirmación */}
                         <TouchableOpacity style={CompraStyles.confirmButton} onPress={Compra}>
                             <Text style={CompraStyles.confirmButtonText}>CONFIRMAR</Text>
                         </TouchableOpacity>
                     </View>

            </View>
        </View>
    );
};

export default CompraScreen;
