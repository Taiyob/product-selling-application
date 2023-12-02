import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase-config";
import PropTypes from "prop-types";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenntUser) => {
      setUser(currenntUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const info = {
    user,
    googleSignIn,
    githubSignIn,
    createUser,
    logIn,
    resetPassword,
    logOut,
    loader,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
