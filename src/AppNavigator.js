// AppNavigator.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/Login";
import Navigator from "./Navigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // substitua por lógica real

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isLoggedIn ? (
                    <Stack.Screen name="Login" >
                        {props => <Login {...props} onLogin={() => setIsLoggedIn(!isLoggedIn)} />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="AppTabs" >
                        {props => <Navigator {...props} onLogout={() => setIsLoggedIn(false)} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
