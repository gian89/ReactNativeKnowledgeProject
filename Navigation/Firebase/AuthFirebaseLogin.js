// Imports: Dependencies
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
// Imports:  Dependencies Redux
import {useDispatch, useSelector} from "react-redux";


import FirebaseLoginSplashScreen from "../../Screen/Firebase/FirebaseLoginSplashScreen";
import FirebaseLogin from "../../Screen/Firebase/FirebaseLogin";
import FirebaseSignUp from "../../Screen/Firebase/FirebaseSignUp";
import FirebaseLoggedTab from "./FirebasePages";

const firebaseLoginStack = createStackNavigator();
const authFirebaseLoginStack = createStackNavigator();


function FirebaseLoginStack() {
    return (
        <firebaseLoginStack.Navigator>
            <firebaseLoginStack.Screen name="firebaseLogin" component={FirebaseLogin}/>
            <firebaseLoginStack.Screen name="firebaseSignUp" component={FirebaseSignUp}/>
        </firebaseLoginStack.Navigator>
    )
}

export default function AuthFirebaseLogin() {
    const [logged, setLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const reduxStore = useSelector(state => state.fakeLogin);
    // const reduxStore = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('inzio useEffect AuthFakeLogin:  ' + JSON.stringify(reduxStore));
        setTimeout(() => {
            setIsLoading(false);
            // dispatch(combinedAction.fakeLoginAction.fakeLogin())
        }, 1500);
        return () => {
            console.log('unMount useEffect AuthFakeLogin')
        };
    }, []);

    return (
        <authFirebaseLoginStack.Navigator>
            {isLoading ? (<authFirebaseLoginStack.Screen name="FirebaseLoginSplashScreen" component={FirebaseLoginSplashScreen}/>)
                : reduxStore.logged ? (<authFirebaseLoginStack.Screen name="FirebaseLoggedTab" component={FirebaseLoggedTab}/>)
                    :
                    (<authFirebaseLoginStack.Screen name="FirebaseLoginStack" component={FirebaseLoginStack}/>)}
        </authFirebaseLoginStack.Navigator>
    )
}
