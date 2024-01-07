import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe';

export default function LowerScreen({ Navigation }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View style={styles.container}>

      <YoutubePlayer style={styles.video}
        height={300}
        play={playing}
        videoId={"kXo7osia8W4"}
      />

      <Text style={styles.textheader}>Instructions</Text>
      <Text style={styles.textbody}>warm up before starting your workout and cool down afterwards. Adjust the weights and repetitions according to your fitness level, gradually increasing the challenge as you progress. It's also important to maintain proper form and listen to your body to prevent injury. For a comprehensive lower body workout, consider incorporating exercises that target different muscle groups, such as the quads, hamstrings, glutes, and calves.</Text>
      <Text style={styles.textheader}>Lower body workout that targets your leg muscles:</Text>
      <ScrollView>
        <Text style={styles.textbody}>Squats: Stand with your feet shoulder-width apart or slightly wider, toes pointing forward or slightly outward. Lower your body by bending your knees and pushing your hips back as if you're sitting into a chair. Keep your chest lifted and your core engaged. Go as low as you comfortably can, ideally until your thighs are parallel to the ground, and then push through your heels to return to the starting position. Aim for 10 to 15 repetitions.</Text>
        <Text style={styles.textbody}>Lunges: Stand tall with your feet hip-width apart. Take a step forward with your right foot, lowering your body until both knees are bent at a 90-degree angle. Your front knee should be directly above your ankle and your back knee should be hovering just above the ground. Push through your right heel to step back to the starting position. Repeat on the other side. Aim for 10 to 12 lunges per leg.</Text>
        <Text style={styles.textbody}>Deadlifts: Stand with your feet shoulder-width apart, holding a barbell, dumbbells, or kettlebells in front of your thighs. Hinge at the hips, lowering the weights toward the ground while keeping your back straight and knees slightly bent. Lower the weights until you feel a stretch in your hamstrings, then engage your glutes and hamstrings to stand back up, squeezing your glutes at the top. Aim for 8 to 10 repetitions.</Text>
        <Text style={styles.textbody}>Glute Bridges: Lie on your back with your knees bent and feet flat on the ground, hip-width apart. Place your arms flat on the ground beside you. Squeeze your glutes and lift your hips off the ground until your body forms a straight line from your knees to your shoulders. Hold for a second at the top, then lower your hips back down and repeat. Aim for 12 to 15 repetitions.</Text>
        <Text style={styles.textbody}>Calf Raises: Stand with your feet hip-width apart, toes pointing forward. Rise up onto your toes as high as you can, then lower your heels back down to the ground. You can perform calf raises on the ground, with a step, or using a calf raise machine at the gym. Aim for 15 to 20 repetitions.</Text>

      </ScrollView>




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#ffe3e0',
  }, textheader: {
    marginStart: 5,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 21,
    color: "#f97765",
    fontWeight: "bold"
  }, textbody: {
    marginStart: 5,
    marginTop: 10,
    color: "#fb9e82",

  }
})