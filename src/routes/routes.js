import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import { StackRouter } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#F5F5F5',
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#FFA07A',
                tabBarStyle:{
                    paddingBottom:5,
                    paddingTop:5
                }
            }}
        >
            <Tab.Screen name="Stúdio Panizz.Art" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Sobre" component={Sobre} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="flower-tulip" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="LoginTab" component={Login} options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="login" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}


export default Routes;

