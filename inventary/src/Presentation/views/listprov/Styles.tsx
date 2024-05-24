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
        alignItems: 'center',
        backgroundColor: '#F5F5F5', // Cambiar el color de fondo a un tono suave
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        marginVertical: 10,
    },
    header: {
        backgroundColor: '#BEDCF7', // Mantener un color de fondo suave para el encabezado
    }
});

export default styles;



