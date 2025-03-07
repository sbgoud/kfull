// app/screens/HomeScreen.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';

// Dummy data arrays
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
];

const RECENT_CALLS = [
  {
    id: '301',
    name: 'Chris Evans',
    profession: 'Marketing Consultant',
    avatar: 'https://images.pexels.com/photos/3777555/pexels-photo-3777555.jpeg',
    audioPrice: '$2.00/min',
    videoPrice: '$3.00/min',
  },
  {
    id: '302',
    name: 'Diana Prince',
    profession: 'Life Coach',
    avatar: 'https://images.pexels.com/photos/264039/pexels-photo-264039.jpeg',
    audioPrice: '$1.80/min',
    videoPrice: '$2.80/min',
  },
];

export default function HomeScreen({ route }) {
  const userEmail = route.params?.userEmail || 'GuestUser@example.com';

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Wrap screen in ScrollView for vertical content */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Header: Logo + App Name */}
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

          {/* Featured Professionals (Horizontal Slider) */}
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
            // Add spacing between items
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />

          {/* All Professionals (Vertical List) */}
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
            // Turn off scrolling so it doesn't conflict with outer ScrollView
            scrollEnabled={false}
          />

          {/* Recent Calls (Vertical List) */}
          <Text style={styles.sectionTitle}>Recent Calls</Text>
          <FlatList
            data={RECENT_CALLS}
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
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    width: 50,
    height: 50,
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
    marginTop: 16,
    color: '#374151',
  },
  horizontalListContainer: {
    paddingBottom: 16,
  },
});
