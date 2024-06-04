import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import { ProductoScreen } from './src/Presentation/views/producto/producto';
import SupplierScreen from './src/Presentation/views/supplier/Supplier';
import ListProdScreen from './src/Presentation/views/listprod/ListProd';
import ListProvScreen from './src/Presentation/views/listprov/ListProv';
import { InicioScreen } from './src/Presentation/views/inicio/Inicio';
import CompraScreen from './src/Presentation/views/compra/Compra';
import VentaScreen from './src/Presentation/views/venta/venta';
import InformeScreen from './src/Presentation/views/informe/informe';
import CategoriaScreen from './src/Presentation/views/categoria/categoria';
import ListCategoriaScreen from './src/Presentation/views/listcatego/listcatego';
import ListCategoScreen from './src/Presentation/views/listcatego/listcatego';
import ListVentaScreen from './src/Presentation/views/listventa/listventa';
import ListComScreen from './src/Presentation/views/listcomp/listcom';
import ListInfoScreen from './src/Presentation/views/listinforme/listinfo';
import { ListadoScreen } from './src/Presentation/views/listados/listado';
import Productos from './src/app/views/Productos/Productos';
import Proveedores from './src/app/views/Proveedores/Proveedores';
import Categorias from './src/app/views/Categorias/Categorias';
import Ventas from './src/app/views/Ventas/Ventas';
import Compras from './src/app/views/Compras/Compras';



export type RootStackParamList = {
  HomeScreen: undefined;
  ProductoScreen: undefined;
  SupplierScreen: undefined;
  InicioScreen: undefined;
  CompraScreen: undefined;
  VentaScreen: undefined;
  InformeScreen: undefined;
  CategoriaScreen: undefined; 
  ListadoScreen: undefined;
  ListCategoScreen: undefined;
  ListVentaScreen: undefined;
  ListComScreen: undefined;
  ListInfoScreen: undefined;
  ListProdScreen: undefined;
  ListProvScreen: undefined;
  Productos: undefined;
  Proveedores: undefined;
  Categorias: undefined;
  Ventas: undefined;
  Compras: undefined;
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
          name="ProductoScreen"
          component={ProductoScreen}
          options={{ headerShown: true, title: 'Productos' }}
        />
        <Stack.Screen
          name="SupplierScreen"
          component={SupplierScreen}
          options={{ headerShown: true, title: 'Proveedores' }}
        />
        <Stack.Screen
          name="InicioScreen"
          component={InicioScreen}
          options={{ headerShown: true, title: 'Inicio' }}
        />  
        <Stack.Screen
        name="CompraScreen"
        component={CompraScreen}
        options={{ headerShown: true, title: 'Compra' }}
      />
      <Stack.Screen
        name="VentaScreen"
        component={VentaScreen}
        options={{ headerShown: true, title: 'Venta' }}
      />
       <Stack.Screen
        name="InformeScreen"
        component={InformeScreen}
        options={{ headerShown: true, title: 'Informe' }}
      />
      <Stack.Screen
        name="CategoriaScreen"
        component={CategoriaScreen}
        options={{ headerShown: true, title: 'Categoria' }}
      />
      <Stack.Screen
          name="ListadoScreen"
          component={ListadoScreen}
          options={{ headerShown: true, title: 'Listados' }}
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
          name="ListCategoScreen"
          component={ListCategoScreen}
          options={{ headerShown: true, title: 'Listado Categorias' }}
        />
        <Stack.Screen
          name="ListVentaScreen"
          component={ListVentaScreen}
          options={{ headerShown: true, title: 'Listado Ventas' }}
        />
        <Stack.Screen
          name="ListComScreen"
          component={ListComScreen}
          options={{ headerShown: true, title: 'Listado Compras' }}
        />
        <Stack.Screen
          name="ListInfoScreen"
          component={ListInfoScreen}
          options={{ headerShown: true, title: 'Listado Informes' }}
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
