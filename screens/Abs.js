import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe';
export default function AbsScreen() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View style={styles.container}>

      <YoutubePlayer style={styles.video}
        height={300}
        play={playing}
        videoId={"K3GLIs6yNp4"}
      />

      <Text style={styles.textheader}>Instructions</Text>
      <Text style={styles.textbody}>warm up before starting your workout and cool down afterwards. Also, listen to your body and modify exercises as needed to suit your fitness level. For a complete and effective abs workout, consider incorporating these exercises into a comprehensive routine that includes exercises targeting other muscle groups as well.</Text>
      <Text style={styles.textheader}>abs workout that targets your core muscles:</Text>
      <ScrollView>
        <Text style={styles.textbody}>Plank: Start by getting into a push-up position, but with your forearms on the ground. Keep your body straight and engage your core muscles. Hold this position for 30 to 60 seconds, or as long as you can maintain proper form.</Text>
        <Text style={styles.textbody}>Bicycle Crunches: Lie on your back with your knees bent and your hands behind your head. Lift your shoulders off the ground and bring your right elbow towards your left knee while extending your right leg straight. Alternate sides in a cycling motion, focusing on twisting your torso and engaging your abs with each repetition. Aim for 10 to 15 reps per side.</Text>
        <Text style={styles.textbody}>Russian Twists: Sit on the ground with your knees bent and your feet lifted slightly off the floor. Lean back slightly, maintaining a straight back. Hold your hands together in front of your chest or grab a weight if desired. Twist your torso to the right, then to the left, keeping your core engaged throughout the movement. Aim for 10 to 15 twists per side.</Text>
        <Text style={styles.textbody}>Leg Raises: Lie flat on your back with your legs extended. Place your hands palms down beneath your glutes for support. Lift your legs off the ground while keeping them straight, raising them towards the ceiling. Slowly lower your legs back down without touching the ground and repeat. Aim for 10 to 15 repetitions.</Text>
        <Text style={styles.textbody}>Mountain Climbers: Start in a high plank position with your hands directly under your shoulders. Drive one knee towards your chest, then quickly switch legs, mimicking a running motion. Keep your core engaged and your hips level throughout the exercise. Aim for 20 to 30 seconds of continuous movement.</Text>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#fff2ff',
  }, textheader: {
    marginStart: 5,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 21,
    color: "#db7093",
    fontWeight: "bold"
  }, textbody: {
    marginStart: 5,
    marginTop: 10,
    color: "#ce929b",

  }
})