import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC17UXNLVAecBBp5P-lME4oaH3xPmdX854",
  authDomain: "fir-web-login-80f47.firebaseapp.com",
  projectId: "fir-web-login-80f47",
  storageBucket: "fir-web-login-80f47.appspot.com",
  messagingSenderId: "610229721794",
  appId: "1:610229721794:web:6ae7be3a7849874d02395b",
  measurementId: "G-JR2D06DYP6",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

export default firebase;
