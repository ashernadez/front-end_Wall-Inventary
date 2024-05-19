import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './Styles'

const ListComScreen = () => {
    return (
        <ScrollView horizontal={true}>
            <View>
                <View style={styles.row}>
                <Text style={[styles.text, styles.header]}>Id |</Text>
                    <Text style={[styles.text, styles.header]}> Cantidad de la Compra  |</Text>
                    <Text style={[styles.text, styles.header]}>  Valor de la Compra  |</Text>
                    <Text style={[styles.text, styles.header]}> Fecha de la  Compra  |</Text>
                </View>
                {/* Puedes agregar más filas de datos aquí */}
            </View>
        </ScrollView>
    )
}

export default ListComScreen
