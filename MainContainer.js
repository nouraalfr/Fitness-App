import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


// here will be  the additional stacks inside the home screen and same thing for other screens
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={home} component={HomeScreen} h />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name={profile} component={ProfileScreen} options={{ headerShown: true }} />
          {/* <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ title: 'Personal Info' }} /> */}
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

export default function MainContainer() {
    return (
        <NavigationContainer>
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
        </NavigationContainer>

    )
}
