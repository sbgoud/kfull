// app/screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // For now, do nothing fancy with these details
  const handleSignup = () => {
    // Mock sign up success
    // Could store in some global state, or just navigate back for now
    alert('Signed up (dummy). Please log in with your new credentials!');
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      
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
      
      <Button title="Sign Up" onPress={handleSignup} color="#1D4ED8" />
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
