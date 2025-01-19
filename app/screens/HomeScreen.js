// app/screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    profession: 'Software Engineer',
    avatar: 'https://via.placeholder.com/150',
    audioPrice: '$1.00/min',
    videoPrice: '$2.00/min',
  },
  {
    id: '2',
    name: 'Jane Smith',
    profession: 'Therapist',
    avatar: 'https://via.placeholder.com/150',
    audioPrice: '$2.00/min',
    videoPrice: '$3.00/min',
  },
];

export default function HomeScreen({ route }) {
  const userEmail = route.params?.userEmail;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {userEmail}!</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard
            name={item.name}
            profession={item.profession}
            avatar={item.avatar}
            audioPrice={item.audioPrice}
            videoPrice={item.videoPrice}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f2937',
  },
});
