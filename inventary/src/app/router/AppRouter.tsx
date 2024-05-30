/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Productos from '../views/Productos/Productos'; // Asegúrate de que esta ruta sea correcta
import { SignIn } from '../views/auth';
import { Home } from '../views/home/home';

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: '', headerShown: false }}
          name="Auth"
          component={SignIn}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Productos" component={Productos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
