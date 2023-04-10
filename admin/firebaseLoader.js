// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
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


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


function signUp() {
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
}