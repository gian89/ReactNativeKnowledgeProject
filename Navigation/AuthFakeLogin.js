import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import FakeLoginSplashScreen from "../Screen/FakeLogIn/FakeLoginSplashScreen";
import FakeLogin from "../Screen/FakeLogIn/FakeLogin";
import FakeSignUp from "../Screen/FakeLogIn/FakeSignUp";
import FakeLoggedPage from "../Screen/FakeLogIn/FakeLoggedPage";

const fakeLoginStack = createStackNavigator();

export default function authFakeLogin() {
    return(
        <fakeLoginStack.Navigator>
            <fakeLoginStack.Screen name="fakeLoginSplashScreen" component={FakeLoginSplashScreen} />
            <fakeLoginStack.Screen name="fakeLogin" component={FakeLogin} />
            <fakeLoginStack.Screen name="fakeSignUp" component={FakeSignUp} />
            <fakeLoginStack.Screen name="fakeLoggedPage" component={FakeLoggedPage()} />
        </fakeLoginStack.Navigator>
    )
}
