import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Connect</Text>

      <Button
        title="Open Chat"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}