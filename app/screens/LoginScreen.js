// app/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For now, any password is valid
    navigation.replace('MainTabs', { userEmail: email });
  };

  const handleGoToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/small.jpg')}
        style={{ width: 80, height: 80, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>KENNERKALL</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} color="#1D4ED8" />

      {/* "Sign Up" Link/CTA */}
      <TouchableOpacity onPress={handleGoToSignup} style={{ marginTop: 16 }}>
        <Text style={{ color: '#1D4ED8', fontWeight: '600' }}>
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
