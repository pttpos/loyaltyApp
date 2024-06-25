import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addPoints } from '../utils/api';

export default function AdminScreen({ route }) {
  const [userId, setUserId] = useState('');
  const [points, setPoints] = useState('');

  const handleAddPoints = async () => {
    try {
      await addPoints(userId, parseInt(points, 10));
      alert('Points added successfully');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Admin Panel</Text>
      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
      />
      <TextInput
        placeholder="Points"
        value={points}
        onChangeText={setPoints}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Points" onPress={handleAddPoints} />
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
