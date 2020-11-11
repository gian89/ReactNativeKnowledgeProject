import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// Imports:  Dependencies Redux
import {useDispatch, useSelector} from "react-redux";

// Import redux Action
import combinedAction from "../../Redux/Action/combinedAction";
import fakeLoginAction from "../../Redux/Action/fakeLoginAction";

export default function FakeLoggedPage() {

    const reduxStore = useSelector(state => state.fakeLogin);
    // const reduxStore = useSelector(state => state);
    const dispatch = useDispatch();

    function fakeLogOut() {
        dispatch(combinedAction.fakeLoginAction.fakeLogOut());
    }

    return (
        <View style={styles.container}>
            <Text>FakeLoggedPage</Text>
            <Button onPress={()=>{fakeLogOut()}} title={"Logout"}/>
            <StatusBar style="auto"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
