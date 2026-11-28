
import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';

import { chats } from '../data/chats';
import ChatItem from '../components/ChatItem';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat => {
    const query = searchQuery.toLowerCase().trim();

    return (
      chat.name.toLowerCase().includes(query) ||
      chat.lastMessage.toLowerCase().includes(query)
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>

      <TextInput
        placeholder="Search conversations..."
        placeholderTextColor="#888"
        style={styles.search}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredChats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatItem
            chat={item}
            onPress={() =>
              navigation.navigate('Chat', { chat: item })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No conversations found.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
    paddingTop: 20,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginHorizontal: 18,
    marginBottom: 18,
  },
  search: {
    backgroundColor: '#202229',
    color: '#FFFFFF',
    padding: 13,
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 12,
  },
  emptyText: {
    color: '#888888',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
});
