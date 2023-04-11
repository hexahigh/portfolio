// Import the functions you need from the SDKs you need


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBiJ7Z2d3uZk8C72FicQmw9Et4CECbz9Oc",

    authDomain: "portfolio-website-373808.firebaseapp.com",

    databaseURL: "https://portfolio-website-373808-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "portfolio-website-373808",

    storageBucket: "portfolio-website-373808.appspot.com",

    messagingSenderId: "17007828978",

    appId: "1:17007828978:web:a6b33055351e7fa553d56b",

    measurementId: "G-NEV2YGJVJ7"

};
// Check if google sign up button is pressed
document.getElementById("googleSignButton").addEventListener("click", function () {
    signInWithRedirect(auth, provider);
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
    }
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);

getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

document.getElementById("signUpButton").addEventListener("click", function () {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
});