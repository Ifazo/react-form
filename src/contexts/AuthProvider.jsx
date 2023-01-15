import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const facebookSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const twitterSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    createUser,
    signIn,
    forgetPassword,
    googleSignIn,
    facebookSignIn,
    twitterSignIn,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
