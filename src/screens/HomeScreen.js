import React from 'react';
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
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>

      <TextInput
        placeholder="Search conversations..."
        placeholderTextColor="#888"
        style={styles.search}
      />

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            chat={item}
            onPress={() =>
              navigation.navigate('Chat', { chat: item })
            }
          />
        )}
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
});