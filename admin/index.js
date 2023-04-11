import { auth } from "./firebaseLoader.js";

// Check if google sign up button is pressed
document.getElementById("googleSignButton").addEventListener("click", function () {
    signInWithRedirect(auth, provider);
});



auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href="ui/index.html";
    } else {
        // No user is signed in.
    }
});