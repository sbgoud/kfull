// app/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';

const FEATURED_DATA = [
  {
    id: '101',
    name: 'Alice Brown',
    profession: 'Therapist',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    audioPrice: '$2.00/min',
    videoPrice: '$3.00/min',
  },
  {
    id: '102',
    name: 'David Wilson',
    profession: 'Financial Advisor',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    audioPrice: '$1.50/min',
    videoPrice: '$2.50/min',
  },
  {
    id: '103',
    name: 'Sophia Martinez',
    profession: 'Career Coach',
    avatar: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg',
    audioPrice: '$2.00/min',
    videoPrice: '$4.00/min',
  },
];

const ALL_DATA = [
  {
    id: '201',
    name: 'John Doe',
    profession: 'Software Engineer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    audioPrice: '$1.00/min',
    videoPrice: '$2.00/min',
  },
  {
    id: '202',
    name: 'Jane Smith',
    profession: 'Medical Doctor',
    avatar: 'https://images.pexels.com/photos/1181426/pexels-photo-1181426.jpeg',
    audioPrice: '$3.00/min',
    videoPrice: '$5.00/min',
  },
  {
    id: '203',
    name: 'Michael Green',
    profession: 'Lawyer',
    avatar: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    audioPrice: '$2.50/min',
    videoPrice: '$4.00/min',
  },
  {
    id: '204',
    name: 'Emily Johnson',
    profession: 'Tutor (Math/Science)',
    avatar: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg',
    audioPrice: '$1.00/min',
    videoPrice: '$2.00/min',
  },
  {
    id: '205',
    name: 'Lucas Rivera',
    profession: 'Fitness Coach',
    avatar: 'https://images.pexels.com/photos/1089166/pexels-photo-1089166.jpeg',
    audioPrice: '$2.00/min',
    videoPrice: '$3.00/min',
  },
];

export default function HomeScreen({ route }) {
  // Email from login (dummy data for now)
  const userEmail = route.params?.userEmail || 'GuestUser@example.com';

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* App Logo + Name */}
        <View style={styles.headerContainer}>
          <Image 
            source={require('../assets/small.jpg')} 
            style={styles.logo} 
            resizeMode="contain"
          />
          <Text style={styles.appTitle}>KENNERKALL</Text>
        </View>

        {/* Welcome text */}
        <Text style={styles.welcomeText}>Welcome, {userEmail}!</Text>

        {/* Featured Professionals (Horizontal) */}
        <Text style={styles.sectionTitle}>Featured Professionals</Text>
        <FlatList
          data={FEATURED_DATA}
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
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContainer}
        />

        {/* All Professionals (Vertical) */}
        <Text style={styles.sectionTitle}>All Professionals</Text>
        <FlatList
          data={ALL_DATA}
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
          // We want a vertical list. 
          // Because we wrapped entire screen in a ScrollView, 
          // we can disable scroll in the FlatList to avoid conflict.
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#1f2937',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },
  horizontalListContainer: {
    paddingBottom: 16, // spacing for horizontal slider
  },
});
