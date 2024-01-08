import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet , Image, Dimensions ,Alert, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar'
import YoutubePlayer from 'react-native-youtube-iframe';


export default function lowerScreen() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View style={styles.container}>

      <YoutubePlayer style={styles.video}
        height={300}
        play={playing}
        videoId={"vLuhN_glFZ8"}
      />

      <Text style={styles.textheader}>Instructions</Text>

      <ScrollView>
        <Text style={styles.textbody}>Stand with one foot behind you on a bench or elevated surface, keeping your other foot planted in front. Lower your back knee towards the ground while keeping your front knee bent, then push back up to the starting position. Repeat for desired reps, then switch legs.</Text>
        <Text style={styles.textheader}>Rounds & Reps Calculation</Text>
        <Text style={styles.textbody}> 3 rounds x 12 repetitions </Text>
        <Text style={styles.textbody}> rest 1 min</Text>

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