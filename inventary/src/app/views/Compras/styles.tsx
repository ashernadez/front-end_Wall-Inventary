import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Cambiado el color de fondo
  },
  body: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#010101',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  textList: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 6,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  Button: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default styles;
