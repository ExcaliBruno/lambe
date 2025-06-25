// AppNavigator.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/Login";
import Navigator from "./Navigator";
import Register from "./screens/Register"

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isLoggedIn ? (
                    <>
                        <Stack.Screen name="Login" >
                            {props => <Login {...props} onLoginSuccess={() => setIsLoggedIn(!isLoggedIn)} />}
                        </Stack.Screen>
                        <Stack.Screen name="Register" component={Register} />
                    </>
                ) : (
                    <Stack.Screen name="AppTabs" >
                        {props => <Navigator {...props} onLogout={() => setIsLoggedIn(false)} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
