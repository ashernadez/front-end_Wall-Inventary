import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BEDCF7', // Cambiar el color de fondo a azul
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', // Alinear horizontalmente los elementos dentro de cada fila
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semi-transparente
        paddingHorizontal: 10, // Añadir relleno horizontal
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000', // Color del borde
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, // Hacer que los elementos ocupen el mismo espacio dentro de la fila
        marginVertical: 10, // Añadir margen vertical para separar del borde
    },
    header: {
        backgroundColor: '#BEDCF7', // Cambié el color de fondo del encabezado a un gris más claro
    }
});

export default styles;
