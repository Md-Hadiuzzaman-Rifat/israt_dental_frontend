import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { initializeFirebaseApp } from "../firebase/firebase.initialize";

initializeFirebaseApp();
const AuthContext = React.createContext();

// useAuth
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // google SingIn
  async function googleSignIn(){
   try{
    const provider = new GoogleAuthProvider();
    const auth=getAuth()
    const result=await signInWithPopup(auth,provider)
    const user=result.user

    saveUser(user.email,user.displayName, 'PUT')
   }catch{
    console.log("Failed to sign in using Google.")
   }
  }

  // signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    saveUser(email,username,'POST')
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const saveUser=(email,displayName,method)=>{
    const user={email,displayName}
    fetch(`http://localhost:2020/users`,{
      method:method ,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
  }

  const value = {
    currentUser,
    signup,
    googleSignIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
