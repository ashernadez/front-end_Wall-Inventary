import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/app/views/home/home';
import { InicioScreen } from './src/app/views/inicio/Inicio';
import Productos from './src/app/views/Productos/Productos';
import Categorias from './src/app/views/Categorias/Categorias';
import Ventas from './src/app/views/Ventas/Ventas';
import Compras from './src/app/views/Compras/Compras';
import Proveedores from './src/app/views/Proveedores/Proveedores';
import { HomeLoginScreen } from './src/app/views/home/login';
export type RootStackParamList = {
  HomeScreen: undefined;
  InicioScreen: undefined;
  Productos: undefined;
  Proveedores: undefined;
  Categorias: undefined;
  Ventas: undefined;
  Compras: undefined;
  Informes: undefined;
  HomeLoginScreen: undefined;
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
          name="InicioScreen"
          component={InicioScreen}
          options={{ headerShown: true, title: 'Inicio' }}
        />  
        <Stack.Screen
          name="HomeLoginScreen"
          component={HomeLoginScreen}
          options={{ headerShown: false }}
        />  
        <Stack.Screen
          name="Productos"
          component={Productos}
          options={{ headerShown: true, title: 'Productos' }}
        />
        <Stack.Screen
          name="Proveedores"
          component={Proveedores}
          options={{ headerShown: true, title: 'Proveedores' }}
        />

        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={{ headerShown: true, title: 'Categorias' }}
        />
        <Stack.Screen
          name="Ventas"
          component={Ventas}
          options={{ headerShown: true, title: 'Ventas' }}
        />
        <Stack.Screen
          name="Compras"
          component={Compras}
          options={{ headerShown: true, title: 'Compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
