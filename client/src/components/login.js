import { React, useState, useEffect } from "react";
import firebase, { signInWithGoogle, auth } from "../firebase";
function Login() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>Username: {localStorage.getItem("name")}</h1>

      <button className ="btn btn-success" onClick={signInWithGoogle}>Sign in with Google</button>
      <button className ="btn btn-primary" onClick={() => {auth.signOut(); localStorage.clear(); window.location.reload(false);}}>SignOut</button>
    </div>
    
  );
}

export default Login;
