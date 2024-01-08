import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet , Image, Dimensions} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const abs = () => {

    const navigation = useNavigation();


    const handlBlankPress = () => {
    navigation.navigate('BlankPage');
      };

    const handlCrunchkPress = () => {
     navigation.navigate('CrunchPage');
       };
       
    const handlMountainPress = () => {
     navigation.navigate('MountainPage');
      };



  return (
<View style={styles.container}>
    <View style={styles.row}>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\blank.png")} />
            <TouchableOpacity onPress={handlBlankPress} >
            <Text style={styles.title}> Blank</Text>
            <View style={styles.line} />
            </TouchableOpacity>

        </View>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\crunch.png")} />
            
            <TouchableOpacity onPress={handlCrunchkPress} >
            <Text style={styles.title}>Crunches</Text>
            <View style={styles.line} />
            </TouchableOpacity>

            


        </View>

    </View>

    <View style={styles.row}>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\moun.png")} />
            <TouchableOpacity onPress={handlMountainPress} >
            <Text style={styles.title}>Mountain Climbers</Text>
            <View style={styles.line} />
            </TouchableOpacity>
           

        </View>

        


    </View>
</View>
  );
};

export default abs;


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

        backgroundColor:'#e9cee9',
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
        borderBottomColor: '#732f73',
        borderBottomWidth: 2,
      },


    image: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth - 210,
        height: 100,
        marginTop:120,




    },
    title: {
        fontWeight: 600,
        fontSize: 25,
        marginTop: 20,
        alignItems: 'center',
        //color: '#db7093',
        color:'#732f73',
        borderBottom:'3px solid black',
        fontWeight:'600'



    },
})
