// app/screens/CallSessionScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CallSessionScreen({ route, navigation }) {
  // route.params could have the professional's name, etc.
  const { professionalName } = route.params || { professionalName: 'Unknown' };
  const [callInProgress, setCallInProgress] = useState(true);

  const handleEndCall = () => {
    setCallInProgress(false);
    // For now, just go back after "ending" call
    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {callInProgress ? (
        <>
          <Text style={styles.callText}>Call in progress with {professionalName}</Text>
          <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
            <Text style={styles.endCallText}>End Call</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.callText}>Call ended.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  endCallButton: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  endCallText: {
    color: '#fff',
    fontWeight: '700',
  },
});
