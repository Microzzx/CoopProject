import firebase from "firebase/compat/app";
import "firebase/compat/auth";


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

// firebase auth
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log("success!");
      const name = result.user.displayName
      const profilePic = result.user.photoURL
      localStorage.setItem("name",name)
      localStorage.setItem("profilePic",profilePic)
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default firebase;
