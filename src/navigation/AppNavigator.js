import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AdminScreen from '../screens/AdminScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}
