import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet , Image, Dimensions} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const chest = () => {

    const navigation = useNavigation();


    const handlPushPress = () => {
    navigation.navigate('pushPage');
      };

    const handlBenchPress = () => {
     navigation.navigate('benchPage');
       };

    // const handlCablePress = () => {
    //     navigation.navigate('benchPage');
    //     };
   



  return (
<View style={styles.container}>
    <View style={styles.row}>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\push.png")} />
            <TouchableOpacity onPress={handlPushPress} >
            <Text style={styles.title}> Push Up</Text>
            <View style={styles.line} />
            </TouchableOpacity>

        </View>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\bench.png")} />
            
            <TouchableOpacity onPress={handlBenchPress} >
            <Text style={styles.title}>Bench Press</Text>
            <View style={styles.line} />
            </TouchableOpacity>

        </View>

        
        

    </View>
{/* 
    <View style={styles.row}>

        <View style={styles.box}>
            <Image style={styles.image} source={require("C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\cabel.png")} />
            <TouchableOpacity onPress={handlCablePress} >
            <Text style={styles.title}>fly Climbers</Text>
            <View style={styles.line} />
            </TouchableOpacity>
           

        </View>

    </View> */}
</View>
  );
};

export default chest;


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

        backgroundColor:'#cbe7e6',
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
        borderBottomColor: '#489b98',
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
        marginTop: 30,
        alignItems: 'center',
        //color: '#db7093',
        color:'#489b98',
        borderBottom:'3px solid black',
        fontWeight:'600'



    },
})
