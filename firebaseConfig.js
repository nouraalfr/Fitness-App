// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdOrtWXEd9fuK93MTskqno55aQyzUIEf4",
  authDomain: "fitnessapp-8e837.firebaseapp.com",
  projectId: "fitnessapp-8e837",
  storageBucket: "fitnessapp-8e837.appspot.com",
  messagingSenderId: "328164700086",
  appId: "1:328164700086:web:fbb464848c063028355b17",
  measurementId: "G-RHB72Z9NP2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(app);