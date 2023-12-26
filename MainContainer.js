import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/home'
import ProfileScreen from './screens/profile'
import SettingScreen from './screens/settings'


const home = 'Home'
const settings = 'Settings'
const profile = 'Profile'

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={home}
                screenOptions={({ route }) => ({
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

                        return < Ionicons name={iconName} size={size} color={color} />
                    },

                    tabBarActiveTintColor: 'tomato',
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

                <Tab.Screen name={home} component={HomeScreen} />
                <Tab.Screen name={profile} component={ProfileScreen} />
                <Tab.Screen name={settings} component={SettingScreen} />

            </Tab.Navigator>
        </NavigationContainer>

    )
}


