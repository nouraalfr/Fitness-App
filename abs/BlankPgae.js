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
        videoId={"kL_NJAkCQBg"}
      />

      <Text style={styles.textheader}>Instructions</Text>

      <ScrollView>
        <Text style={styles.textbody}>Start by getting into a push-up position, but with your forearms on the ground. Keep your body straight and engage your core muscles. Hold this position for 30 to 60 seconds, or as long as you can maintain proper form.</Text>
        <Text style={styles.textheader}>Rounds & Reps Calculation</Text>
        <Text style={styles.textbody}> 1 min for 3 rounds</Text>
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