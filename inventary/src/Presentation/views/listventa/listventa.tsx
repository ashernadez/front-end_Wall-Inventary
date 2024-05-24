import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Styles';

const ListVentaScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <View style={styles.row}>
                        <Text style={[styles.text, styles.header]}> Id |</Text>
                        <Text style={[styles.text, styles.header]}> Cantidad Compra |</Text>
                        <Text style={[styles.text, styles.header]}> Valor de Venta |</Text>
                        <Text style={[styles.text, styles.header]}> Fecha de la Venta |</Text>
                    </View>
                    {/* Puedes agregar más filas de datos aquí */}
                </View>
            </ScrollView>
        </View>
    );
};

export default ListVentaScreen;


