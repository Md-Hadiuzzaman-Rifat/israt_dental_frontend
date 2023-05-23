import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


export function initializeFirebaseApp(){
    return initializeApp(firebaseConfig);
}
  