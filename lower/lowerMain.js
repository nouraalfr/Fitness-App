import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet , Image, Dimensions, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const lower = () => {

    const navigation = useNavigation();


    const handlSquatPress = () => {
    navigation.navigate('squatPage');
      };

    const handlBulgarianPress = () => {
     navigation.navigate('bulgarianPage');
       };
       
    const handlDeadliftPress = () => {
     navigation.navigate('deadliftPage');
      };

    const handlBridgPress = () => {
     navigation.navigate('bridgPage');
      };

    const handlAbductionPress = () => {
     navigation.navigate('abductionPage');
      };
   
   


  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.row}>

    <View style={styles.box}>
        <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\squat.png")} />
        <TouchableOpacity onPress={handlSquatPress} >
        <Text style={styles.title}> Squat</Text>
        <View style={styles.line} />
        </TouchableOpacity>

    </View>

    <View style={styles.box}>
        <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\bulgarian.png")} />
        
        <TouchableOpacity onPress={handlBulgarianPress} >
        <Text style={styles.title}>Bulgarian Split</Text>
        <View style={styles.line} />
        </TouchableOpacity>


    </View>

    </View>

    <View style={styles.row}>

    <View style={styles.box}>
        <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\deadlift.png")} />
        <TouchableOpacity onPress={handlDeadliftPress} >
        <Text style={styles.title}>deadlift</Text>
        <View style={styles.line} />
        </TouchableOpacity>
    

    </View>
    <View style={styles.box}>
        <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\bridg.png")} />
        <TouchableOpacity onPress={handlBridgPress} >
        <Text style={styles.title}>Hip Bridge</Text>
        <View style={styles.line} />
        </TouchableOpacity>
    

    </View>

    </View>

    <View style={styles.row}>

    <View style={styles.box}>
    <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\abduction.png")} />
    <TouchableOpacity onPress={handlAbductionPress} >
    <Text style={styles.title}>Hip Abduction</Text>
    
    <View style={styles.line} />
    </TouchableOpacity>


    </View>
    {/* <View style={styles.box}>
    <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\bridg.png")} />
    <TouchableOpacity onPress={handlMountainPress} >
    <Text style={styles.title}>Hip Bridge</Text>
    <View style={styles.line} />
    </TouchableOpacity>


    </View> */}

    </View>
    </ScrollView>
    </View>
  );
};

export default lower;


const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    row:{
        flexDirection: 'row',

    },

    box:{

        backgroundColor:'#fbd4d0',
        padding:10,
        borderRadius:20,
        margin:5,
        marginTop:20,
        width:190,
        height:230,
        shadowColor: 'grey',
        shadowOpacity:0.5,
        alignItems:'center',



    },

    line: {
        borderBottomColor: '#f97765',
        borderBottomWidth: 2,
      },


    image: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth - 200,
        height: 100,
        marginTop:100,




    },
    title: {
        fontWeight: 600,
        fontSize: 25,
        marginTop: 20,
        alignItems: 'center',
        //color: '#db7093',
        color:'#f97765',
        borderBottom:'3px solid black',
        fontWeight:'600'



    },
})
