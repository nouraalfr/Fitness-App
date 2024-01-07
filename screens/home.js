import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, } from 'react-native'



const Abs = (navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Abs Workout')}>
            <View style={[styles.cardContainer, { backgroundColor: '#fff2ff' }]}>
                <Image style={styles.image} source={require("/Users/nouraalfraidi/Desktop/Fitness/MobileProject/assets/w1.png")} />
                <Text style={[styles.title, { color: '#db7093' }]} color='pink'>  Abs Workout</Text>
            </View>
        </TouchableOpacity>


    )
}

const Chest = (navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Chest Workout')}>
            <View style={[styles.cardContainer, { backgroundColor: "#eaf7ff" }]}>
                <Image style={[styles.image, ,]} source={require("/Users/nouraalfraidi/Desktop/Fitness/MobileProject/assets/w22.png")} />
                <Text style={[styles.title, { color: '#274ea9' }]}>Chest Workout</Text>
            </View>
        </TouchableOpacity>


    )
}

const Lower = (navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Lower Workout')}>
            <View style={[styles.cardContainer, { backgroundColor: "#ffe3e0" }]}>
                <Image style={styles.image} source={require("/Users/nouraalfraidi/Desktop/Fitness/MobileProject/assets/w3.jpg")} />
                <Text style={[styles.title, { color: '#f97765' }]}>Lower Workout</Text>
            </View>
        </TouchableOpacity>


    )
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {Abs(navigation)}
            {Chest(navigation)}
            {Lower(navigation)}
        </View>
    )
}





const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    cardContainer: {
        width: deviceWidth - 40,
        height: 150,
        marginTop: 40,
        borderRadius: 10,
        fontSize: 110,
        shadowColor: 'grey',
        shadowOffset: {
            width: 5, height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center'

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth - 230,
        height: 150,
        borderRadius: 30,
        marginLeft: 170,


    },
    title: {
        fontWeight: 600,
        fontSize: 30,
        marginRight: 180,
        marginTop: 40,


    },
})


export default HomeScreen;