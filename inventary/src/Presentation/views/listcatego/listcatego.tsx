import React from 'react'
import { View, Text, ScrollView } from 'react-native' 
import styles from './Styles'
const ListCategoScreen = () => {
  return (
    <ScrollView horizontal={true}>
        <View>
            <View style={styles.row}>
                <Text style={[styles.text, styles.header]}> Id |</Text>
                <Text style={[styles.text, styles.header]}>  Nombre categoria  |</Text>
       </View>
            {/* Puedes agregar más filas de datos aquí */}
        </View>
    </ScrollView>
)
}

export default ListCategoScreen