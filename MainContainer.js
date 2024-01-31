import { createStackNavigator } from '@react-navigation/stack';
// import * as React from "react"
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import {User, onAuthStateChanged} from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './screens/home'
import ProfileScreen from './screens/profile'
import SettingScreen from './screens/settings'
import  Login from './screens/Login'
import mainAbs from './abs/mainAbs'
import BlankPage from './abs/BlankPgae'
import CrunchPage from './abs/CrunchPage'
import MountainPage from './abs/MountainPage'
import chestMain from './chest/chestMain'
import pushPage from './chest/pushPage'
import benchPage from './chest/benchPage'
import lowerMain from './lower/lowerMain'
import squatPage from './lower/squatPage'
import bulgarianPage from './lower/bulgarianPage'
import deadliftPage from './lower/deadliftPage'
import bridgPage from './lower/bridgPage'
import abductionPage from './lower/abductionPage'
import { FIREBASE_AUTH } from './firebaseConfig';





const home = 'Home'
const settings = 'Settings'
const profile = 'Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


// here will be  the additional stacks inside the home screen and same thing for other screens
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={home} component={HomeScreen} h />
            <Stack.Screen name="mainAbs" component={mainAbs} options={{ title: 'Abs Workout' }} />
            <Stack.Screen name="BlankPage" component={BlankPage} options={{ title: 'Blank Workout' }} />
            <Stack.Screen name="CrunchPage" component={CrunchPage} options={{ title: 'Crunches Workout' }} />
            <Stack.Screen name="MountainPage" component={MountainPage} options={{ title: 'Mountain Climbers Workout' }} />  

            <Stack.Screen name="chestMain" component={chestMain} options={{ title: 'Chest Workout' }} />
            <Stack.Screen name="pushPage" component={pushPage} options={{ title: 'Push Ups Workout' }} />
            <Stack.Screen name="benchPage" component={benchPage} options={{ title: 'Barbell Bench Press Workout' }} />

            <Stack.Screen name="lowerMain" component={lowerMain} options={{ title: 'Lower Body Workout' }} />
            <Stack.Screen name="squatPage" component={squatPage} options={{ title: 'Squat Workout' }} />
            <Stack.Screen name="bulgarianPage" component={bulgarianPage} options={{ title: 'bulgarian Split Workout' }} />
            <Stack.Screen name="deadliftPage" component={deadliftPage} options={{ title: 'Deadlift Workout' }} />
            <Stack.Screen name="bridgPage" component={bridgPage} options={{ title: 'Hip Bridge Workout' }} />
            <Stack.Screen name="abductionPage" component={abductionPage} options={{ title: 'Hip Abduction Workout' }} />
        </Stack.Navigator>

        
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name={profile} component={ProfileScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      );
}

const SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={settings} component={SettingScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
}

const mainScreen = ()=> {
    return(
        <Tab.Navigator initialRouteName={home}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let rn = route.name

                        if (rn === home) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === settings) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (rn === profile) {
                            iconName = focused ? 'person' : 'person-outline'
                        }

                        return < Ionicons name={iconName} size={size} color={color} accessibilityLabel='' />
                    },

                    tabBarActiveTintColor: 'grey',
                    tabBarInactiveTintColor: 'grey',
                    tabBarStyle: [
                        {
                            display: 'flex',
                            paddingTop: 10,
                        },
                        null,
                    ],
                })
                }
            >
                <Tab.Screen name={home} component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name={profile} component={ProfileStack} />
                <Tab.Screen name={settings} component={SettingStack} />

            </Tab.Navigator>

    )
}

export default function MainContainer() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        });
    
        return () => unsubscribe();
    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                {user? (
                    <Stack.Screen name="mainScreen" component={mainScreen} options={{headerShown: false}}  />
                ) : (
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />)}

            </Stack.Navigator>

        </NavigationContainer>

    )
}
