// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbGiQR3ajas9PImvgG7mBnSpMr0g5e29w",
  authDomain: "quora-mern-85e69.firebaseapp.com",
  projectId: "quora-mern-85e69",
  storageBucket: "quora-mern-85e69.appspot.com",
  messagingSenderId: "579344295620",
  appId: "1:579344295620:web:75359961befee5c21c0b91",
  measurementId: "G-7TZE1JX8SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()


export {auth , provider}