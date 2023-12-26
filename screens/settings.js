import React from "react"
import { StyleSheet, Text, View, Button } from 'react-native'

export default function SettingScreen({ Navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is setting</Text>
            {/* <Button
                color="black"
                title='Click'
                onPress={() => Navigation.navigate('Home')}
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'red',
    },
})
