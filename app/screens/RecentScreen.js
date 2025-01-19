// app/screens/RecentScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
