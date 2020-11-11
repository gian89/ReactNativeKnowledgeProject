import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAFvrNQKnQeKiekufDbP0OoAN5HnY4E4xw",
    authDomain: "react-knwledge-project.firebaseapp.com",
    databaseURL: "https://react-knwledge-project.firebaseio.com",
    projectId: "react-knwledge-project",
    storageBucket: "react-knwledge-project.appspot.com",
    messagingSenderId: "362866881071",
    appId: "1:362866881071:web:7735d2ab20b4fb2ca84cda",
    measurementId: "G-DQG5WVNDTL"
};
// Initialize Firebase
console.log("firebaseConfig:  " + Object.getOwnPropertyNames(firebase));
firebase.initializeApp(firebaseConfig);

/*// Get the Auth service for the default app
const firebaseAuth = firebase.auth();
firebaseAuth.signInWithEmailAndPassword("test1@test1.com", "test1.1")
    .then(function (result) {
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
        console.log("Authentication success: " + JSON.stringify(result));
    }).catch(function (error) {
    // Handle error.
    console.log("Authentication Error: " + error);
});*/


export default firebaseConfig;
