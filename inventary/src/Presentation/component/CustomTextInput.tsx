import React from 'react';
import { View, Image, TextInput, StyleSheet, KeyboardType, TouchableOpacity } from 'react-native';

interface Props {
    image: any;
    placeholder: string;
    value: string;
    keyboardType: KeyboardType;
    secureTextEntry?: boolean;
    property: string;
    onChangeText: (property: string, value: any) => void;
    toggleSecureEntry?: () => void;
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
    toggleSecureEntry
}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon} source={image} />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
            />
            {property === 'password' && (
                <TouchableOpacity onPress={toggleSecureEntry}>
                    <Image
                        style={styles.showHideIcon}
                        source={secureTextEntry
                            ? require('../../../assets/esconder.png')
                            : require('../../../assets/mostrar-contrasena.png')}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formIcon: {
        width: 30,
        height: 30,
        marginTop: 5,
        marginLeft: 7,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center', // Centrar verticalmente los elementos dentro del contenedor
        backgroundColor: '#fff', // Fondo blanco para el campo de texto
        borderRadius: 35, // Borde redondeado
        padding: 10, // Relleno interno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, // Sombra para Android
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 0, // Quitar borde inferior
        marginLeft: 15,
        paddingVertical: 10, // Relleno vertical
        fontSize: 16,
        color: '#333', // Texto oscuro
    },
    showHideIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
});
