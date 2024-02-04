import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';

export default function SettingScreen({ navigation }) {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this amazing app!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared successfully');
        } else {
          console.log('Shared cancelled');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed the share sheet');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      // Add any additional code to handle the logout process
    } catch (error) {
      console.log(error);
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.title}>Logout</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.card, styles.button]} onPress={handleShare}>
        <Text style={styles.buttonText}>Share with friends</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>Privacy</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Help</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#274ea9',
    fontSize: 21,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  card: {
    height: 70,
    width: 400,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#ffe3e0',
    borderRadius: 10,
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
  },
  button: {
    color: '#274ea9',
    fontSize: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#274ea9',
    fontSize: 21,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
