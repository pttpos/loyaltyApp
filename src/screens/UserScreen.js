import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text>User Dashboard</Text>
      <Text>Username: {user.username}</Text>
      <Text>Points: {user.points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
