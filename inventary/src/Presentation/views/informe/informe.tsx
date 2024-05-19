import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Agrega TouchableOpacity
import { RoundedButton } from '../../component/RoundedButton';
import useViewModel from './viewModel';
import styles from './Styles';
import { CustomTextInput } from '../../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import InformeStyles from './Styles';

const InformeScreen = () => {
    const { Tipo, Fecha_I,  onChange, informe } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/fondor.jpeg')}
                style={styles.imageBackground}
            />

            <View style={styles.form}>
                <Text style={styles.formText}>Registrar Informe</Text>

                <CustomTextInput
                    image={require('../../../../assets/tipoI.png')}
                    placeholder='Tipo de informe'
                    keyboardType='default'
                    property='Tipo'
                    onChangeText={onChange}
                    value={Tipo}
                />
                <CustomTextInput
                    image={require('../../../../assets/fechaI.png')}
                    placeholder='Fecha del Informe'
                    keyboardType='default'
                    property='Fecha_I'
                    onChangeText={onChange}
                    value={Fecha_I}
                   
                />
                <View style={InformeStyles.buttonContainer}>
                    {/* Botón de confirmación */}
                    <TouchableOpacity style={InformeStyles.confirmButton} onPress={informe}>
                        <Text style={InformeStyles.confirmButtonText}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default InformeScreen;

