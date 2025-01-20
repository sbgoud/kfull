// app/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';  // <-- new import
import BottomTabNavigator from './BottomTabNavigator';
import CallSessionScreen from '../screens/CallSessionScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ headerShown: true, title: 'Sign Up' }}
      />
      <Stack.Screen 
        name="MainTabs" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
  name="CallSession" 
  component={CallSessionScreen} 
  options={{ headerShown: false }} 
/>
    </Stack.Navigator>
  );
}
