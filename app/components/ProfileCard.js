// app/components/ProfileCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileCard({
  name,
  profession,
  avatar,
  audioPrice,
  videoPrice,
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <View style={styles.callRow}>
          <TouchableOpacity style={styles.callButton}>
            <Ionicons name="call-outline" size={20} color="#1D4ED8" />
            <Text style={styles.callPrice}>{audioPrice}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton}>
            <Ionicons name="videocam-outline" size={20} color="#1D4ED8" />
            <Text style={styles.callPrice}>{videoPrice}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f9fafb',
    padding: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '700',
    color: '#1f2937',
    fontSize: 16,
    marginBottom: 4,
  },
  profession: {
    color: '#4b5563',
    marginBottom: 8,
  },
  callRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  callPrice: {
    marginLeft: 4,
    color: '#1D4ED8',
    fontWeight: '600',
  },
});
