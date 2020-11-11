import React, {useState, useEffect}from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AllNavigationContainer from "../Navigation/AllNavigationContainer";

export default function App() {
    useEffect(() => {
        return () => {
            console.log('intial useEffect')
        };
    },[]);

    return (
        <NavigationContainer>
            <AllNavigationContainer.DrawerNavigator />
        </NavigationContainer>

    );
}
