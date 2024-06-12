import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

const useNavigation = () => {
  const navigation = useContext(NavigationContext);
  if (!navigation) {
    throw new Error('useNavigation debe ser utilizado dentro de un componente envuelto por un NavigationContainer.');
  }
  return navigation;
};

export default useNavigation;