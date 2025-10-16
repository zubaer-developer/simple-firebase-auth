// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUigGe582P551NR3vM8gqZBOXq11AF0Sc",
  authDomain: "simple-firebase-auth-1-1f336.firebaseapp.com",
  projectId: "simple-firebase-auth-1-1f336",
  storageBucket: "simple-firebase-auth-1-1f336.firebasestorage.app",
  messagingSenderId: "643351095119",
  appId: "1:643351095119:web:07de4bee50bdcacfef873a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
