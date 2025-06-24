import React from "react";
//import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator()

export default function Navigator(){
    return (
            <Tab.Navigator 
                screenOptions={({route})=> ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName;

                        if( route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'AddPhoto'){
                            iconName = 'camera'
                        } else if (route.name === 'Profile') {
                            iconName = 'user'
                        }

                        return (
                            <Icon 
                                name = {iconName}
                                size = {focused? 30 : 25}
                                color = {focused? '#007af3' : '#888'}
                            />
                        );
                    },
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopColor: '#eee',
                        height: 50,
                    },
                })}
            >
                <Tab.Screen name = "Home" component={Feed}/>
                <Tab.Screen name = "AddPhoto" component={AddPhoto}/>
                <Tab.Screen name = "Profile" component={Profile}/>

            </Tab.Navigator>
    )
}