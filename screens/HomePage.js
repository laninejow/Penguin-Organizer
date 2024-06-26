// screens/HomePage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/penguins_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to the Pittsburgh Penguins App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
