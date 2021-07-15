import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../main-screen/main-sreen';
import DetailScreen from '../detail-screen/detail-screen';
import { Text } from 'react-native';

const GlobalScreen = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="Search" component={MainScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GlobalScreen