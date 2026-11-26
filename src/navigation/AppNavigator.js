import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Connect' }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: 'Conversation' }}
      />
    </Stack.Navigator>
  );
}