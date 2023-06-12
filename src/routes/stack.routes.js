import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                ></Stack.Screen>
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
