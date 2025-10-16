import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);

  const handleSigninWithGoogle = () => {
    // console.log("button clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result);
        // console.log(result.user);
        setUser(result.user);
        // console.log(user?.displayName);
        // console.log(user?.email);
        // console.log(user?.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut done");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Log in</h2>
      {/* <button className="card" onClick={handleSigninWithGoogle}>
        Sign in with Google
      </button>
      <button className="card" onClick={handleSignOut}>
        SignOut
      </button> */}

      {user ? (
        <button className="card" onClick={handleSignOut}>
          SignOut
        </button>
      ) : (
        <button className="card" onClick={handleSigninWithGoogle}>
          Sign in with Google
        </button>
      )}

      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
