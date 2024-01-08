import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet , Image, Dimensions ,Alert, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar'
import YoutubePlayer from 'react-native-youtube-iframe';


export default function AbsScreen() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View style={styles.container}>

      <YoutubePlayer style={styles.video}
        height={300}
        play={playing}
        videoId={"cnyTQDSE884"}
      />

      <Text style={styles.textheader}>Instructions</Text>

      <ScrollView>
        <Text style={styles.textbody}>Start in a high plank position with your hands directly under your shoulders. Drive one knee towards your chest, then quickly switch legs, mimicking a running motion. Keep your core engaged and your hips level throughout the exercise. Aim for 20 to 30 seconds of continuous movement.</Text> 
        <Text style={styles.textheader}>Rounds & Reps Calculation</Text>
        <Text style={styles.textbody}> 3 rounds x 20 repetitions</Text>
        <Text style={styles.textbody}> rest 40s</Text>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 70,
    flex: 1,
    backgroundColor: '#fff2ff',
  }, 
  
  textheader: {
    marginStart: 5,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 21,
    color: "#db7093",
    fontWeight: "bold"
  },
  
  textbody: {
    marginStart: 5,
    marginTop: 10,
    color: "#ce929b",
    fontSize:20,

  }
})