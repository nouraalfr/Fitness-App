import React from "react"
import { StyleSheet, Text, View, Button } from 'react-native'

export default function HomeScreen({ Navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is home</Text>
            <Button
                color="black"
                title='Click'
                onPress={() => console.log("pressed!!")}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'red',
    },
})

