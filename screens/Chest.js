import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';

export default function ChestScreen() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View style={styles.container}>

      <YoutubePlayer style={styles.video}
        height={300}
        play={playing}
        videoId={"qwZV_29_ezI"}
      />

      <Text style={styles.textheader}>Instructions</Text>
      <Text style={styles.textbody}>warm up before starting your workout and cool down afterwards. Additionally, adjust the weights and repetitions according to your fitness level, gradually increasing the challenge as you progress. It's also important to maintain proper form and listen to your body to prevent injury. For a well-rounded chest workout, consider including exercises that target different areas of the chest, such as the upper, middle, and lower portions.</Text>
      <Text style={styles.textheader}>chest workout that targets your pectoral muscles:</Text>
      <ScrollView>
        <Text style={styles.textbody}>Push-Ups: Start in a high plank position with your hands slightly wider than shoulder-width apart. Lower your body by bending your elbows, keeping them close to your sides, until your chest nearly touches the ground. Push back up to the starting position and repeat. Aim for 10 to 15 repetitions. If you find regular push-ups challenging, you can modify by performing them on your knees or against a wall.</Text>
        <Text style={styles.textbody}>Dumbbell Bench Press: Lie flat on a bench with a dumbbell in each hand, positioned at chest level with your palms facing forward. Press the dumbbells upward, extending your arms fully while keeping your elbows slightly bent. Slowly lower the dumbbells back down to chest level and repeat. Aim for 10 to 12 repetitions.</Text>
        <Text style={styles.textbody}>Incline Dumbbell Flyes: Set an adjustable bench at a 45-degree incline. Lie back on the bench with a dumbbell in each hand, held above your chest with palms facing each other. With a slight bend in your elbows, lower the weights out to the sides in a wide arc until you feel a stretch in your chest. Then, bring the dumbbells back up to the starting position. Aim for 10 to 12 repetitions.</Text>
        <Text style={styles.textbody}>Chest Dips: Find parallel bars or dip bars at a dip station. Place your hands on the bars, shoulder-width apart, and lift yourself up so that your arms are fully extended. Lower your body by bending your elbows until your chest is slightly below your hands, then push back up to the starting position and repeat. Aim for 8 to 12 repetitions. If you're new to dips, you can use an assisted dip machine or resistance bands for support.</Text>
        <Text style={styles.textbody}>Cable Chest Press: Attach handles to the high pulleys of a cable machine. Stand in the center, facing away from the machine, with one foot slightly in front of the other. Grab the handles and bring your hands to chest level, elbows bent. Push the handles forward, extending your arms while keeping your elbows slightly bent. Slowly bring the handles back to chest level and repeat. Aim for 10 to 12 repetitions.</Text>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#eaf7ff',
  }, textheader: {
    marginStart: 5,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 21,
    color: "#274ea9",
    fontWeight: "bold"
  }, textbody: {
    marginStart: 5,
    marginTop: 10,
    color: "#7f9dc0",

  }
})