/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, View, Text, Platform, KeyboardAvoidingView,
    TextInput, TouchableHighlight, ScrollView } from 'react-native';

export const SignIn = ({navigation}:any) => {

   const login = () => {
      navigation.navigate('Home');
   };

 return (
   <ScrollView style={styles.container}>
   <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.textLogin}>login</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
      </View>

      <View style={styles.password}>
        <TextInput style={styles.input} placeholder="Password" />
      </View>

      <TouchableHighlight style={styles.button} onPress={login}>
         <Text style={styles.textButton}>sign in</Text>
      </TouchableHighlight>
   </KeyboardAvoidingView>
   </ScrollView>
   );
};



const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignContent: 'center',
     paddingTop: 120,
     paddingHorizontal: 10,
   },
   textLogin:{
     fontSize: 29,
     color: '#3333CC',
     textAlign: 'center',
     marginBottom: 14,
   },
   input:{
     padding: 14,
     fontSize: 21,
     borderWidth: 2,
     borderColor: '#ECECEC',
   },
   password:{
     marginVertical:12,
   },
   button:{
     padding: 12,
     backgroundColor: '#3333CC',
   },
   textButton:{
     textAlign: 'center',
     fontSize: 17,
     color: '#ECECEC',
   },
});