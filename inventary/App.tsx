import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import SupplierScreen from './src/Presentation/views/supplier/Supplier';
import ListProdScreen from './src/Presentation/views/listprod/ListProd';
import ListProvScreen from './src/Presentation/views/listprov/ListProv';
import { InicioScreen } from './src/Presentation/views/inicio/Inicio';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  SupplierScreen: undefined;
  ListProdScreen: undefined;
  ListProvScreen: undefined;
  InicioScreen: undefined;
};

const Stack = createNativeStackNavigator <RootStackParamList> 
(); 
 
const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{ 
        headerShown: false 
      }}> 
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: true, title: 'Productos' }}
        />
        <Stack.Screen
          name="SupplierScreen"
          component={SupplierScreen}
          options={{ headerShown: true, title: 'Proveedores' }}
        />
        <Stack.Screen
          name="ListProdScreen"
          component={ListProdScreen}
          options={{ headerShown: true, title: 'Listado Productos' }}
        />
        <Stack.Screen
          name="ListProvScreen"
          component={ListProvScreen}
          options={{ headerShown: true, title: 'Listado Proveedores' }}
        />
        <Stack.Screen
          name="InicioScreen"
          component={InicioScreen}
          options={{ headerShown: true, title: 'Inicio' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
