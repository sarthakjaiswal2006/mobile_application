
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import MessageBubble from '../components/MessageBubble';

export default function ChatScreen({ route }) {
  const { chat } = route.params;

  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hey! How are you?',
      sender: 'other',
      time: '4:30 PM',
    },
    {
      id: '2',
      text: 'I am doing great! What about you?',
      sender: 'me',
      time: '4:31 PM',
    },
    {
      id: '3',
      text: chat.lastMessage,
      sender: 'other',
      time: '4:32 PM',
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages(previous => [...previous, newMessage]);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <MessageBubble message={item} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messageList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
  },
  messageList: {
    padding: 15,
    gap: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#181A20',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#252730',
    color: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  sendButton: {
    backgroundColor: '#075E46',
    padding: 12,
    borderRadius: 22,
    marginLeft: 8,
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
