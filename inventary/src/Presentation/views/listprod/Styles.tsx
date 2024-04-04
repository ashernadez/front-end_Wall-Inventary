import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center', // Alinear horizontalmente los elementos dentro de cada fila
        backgroundColor: 'white', // Fondo blanco
        paddingHorizontal: 10, // Añadir relleno horizontal
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black', // Color del borde
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, // Hacer que los elementos ocupen el mismo espacio dentro de la fila
        marginVertical: 10, // Añadir margen vertical para separar del borde
    },
    header: {
        backgroundColor: 'white', // Color de fondo diferente para la fila de encabezado
    }
});

export default styles;
