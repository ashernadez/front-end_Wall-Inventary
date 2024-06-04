/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

const baseUrl: string = 'http://10.0.2.2:8000/api/';

export const Home2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(baseUrl + 'products', {
          method: 'GET',
        });
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
       <ScrollView horizontal={true} style={styles.body}>
        {products.map((item, key) => (
          <View key={key} style={styles.box}>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  body:{
    marginTop:10,
    flexDirection: 'row',
  },
  box:{
    flex:1,
    height: 50,
    width: 160,
  },
  textList: {
    fontSize: 25,
    color:'blue',
  },
  image:{
   width: 136,
   height: 108,
  },
});