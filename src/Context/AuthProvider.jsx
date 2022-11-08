import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // SignUp
  const SinUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------User name & photo load----------//
  const UpdateProfile = (name, photoURL) => {
    // setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //Login
  const LogInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleLogin = (Provider) => {
    return signInWithPopup(auth, Provider);
  };
  //LogOut
  const LogOut = () => {
    return signOut(auth);
  };

  //Set User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    SinUpWithEmail,
    UpdateProfile,
    LogInWithEmail,
    GoogleLogin,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
