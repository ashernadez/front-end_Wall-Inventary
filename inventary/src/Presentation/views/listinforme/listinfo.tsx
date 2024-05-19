import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './Styles'

const ListInfoScreen = () => {
    return (
        <ScrollView horizontal={true}>
            <View>
                <View style={styles.row}>
                <Text style={[styles.text, styles.header]}>Id |</Text>
                    <Text style={[styles.text, styles.header]}> Tipo de Informe  |</Text>
                    <Text style={[styles.text, styles.header]}>  Fcha del Informe  |</Text>
                </View>
                {/* Puedes agregar más filas de datos aquí */}
            </View>
        </ScrollView>
    )
}

export default ListInfoScreen

