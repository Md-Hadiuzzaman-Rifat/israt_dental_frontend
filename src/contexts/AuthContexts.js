import {
    createUserWithEmailAndPassword,
    getAuth,
    getIdToken,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [admin, setAdmin] = useState(false);
  const [token,setToken]=useState()

  const navigate=useNavigate()

  // onAuth State Change
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      getIdToken(user)
        .then(idToken=>setToken(idToken))
    });
    return unsubscribe;
  }, []);

  // check the user is admin or not
  useEffect(()=>{
    fetch(`https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/users/makeAdmin/${currentUser?.email}`)
    .then(res=>res.json())
    // .then(res=>console.log(res.admin))
    .then(data=>setAdmin(data.admin))
  },[currentUser])

  // google SingIn
  async function googleSignIn(){
   try{
    const provider = new GoogleAuthProvider();
    const auth=getAuth()
    const result=await signInWithPopup(auth,provider)
    const user=result.user
    // console.log(user, user.displayName, user.email)
    // save user in authentication database
    saveUser(user.email,user.displayName, 'PUT')
    navigate("/")
   }catch{
    console.log("Failed to sign in using Google.")
   }
  }

  // signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    // save user in authentication database
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
  

  // A person cant authenticate 2 time using same email.
  const saveUser=(email,displayName,method)=>{
    const user={email,displayName}
    fetch(`https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/users`,{
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
    token,
    admin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
