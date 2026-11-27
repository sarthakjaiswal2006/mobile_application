import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ChatItem({ chat, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Image source={{ uri: chat.avatar }} style={styles.avatar} />

      <View style={styles.details}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{chat.name}</Text>
          <Text style={styles.time}>{chat.time}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.message} numberOfLines={1}>
            {chat.lastMessage}
          </Text>

          {chat.unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{chat.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#181A20',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 13,
  },
  details: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    color: '#92949C',
    fontSize: 12,
  },
  message: {
    color: '#A5A7AE',
    fontSize: 13,
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#25D366',
    borderRadius: 12,
    minWidth: 21,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});