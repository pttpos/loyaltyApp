import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signup } from '../utils/api';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signup(username, password);
      navigation.navigate('Login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
