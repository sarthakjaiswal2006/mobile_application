
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ message }) {
  const isMine = message.sender === 'me';

  return (
    <View
      style={[
        styles.container,
        isMine ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>
        {message.text}
      </Text>

      <Text style={styles.time}>
        {message.time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 15,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#075E46',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#252730',
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  time: {
    color: '#B9C5BF',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'right',
  },
});
