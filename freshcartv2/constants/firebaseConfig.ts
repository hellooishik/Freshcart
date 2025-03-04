// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO09GWx4CUINjVKehMkKRLPQOQCb5l9eM",
  authDomain: "freshcart-c3c42.firebaseapp.com",
  databaseURL: "https://freshcart-c3c42-default-rtdb.firebaseio.com",
  projectId: "freshcart-c3c42",
  storageBucket: "freshcart-c3c42.firebasestorage.app",
  messagingSenderId: "940894174237",
  appId: "1:940894174237:web:2dc049701f971ffe2d1af4",
  measurementId: "G-S1MHG4C8Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);