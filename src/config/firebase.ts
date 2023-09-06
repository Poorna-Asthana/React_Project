// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB28KwRmjdomnTLLFJBomZZAqeJUl31p_c",
  authDomain: "react-5178b.firebaseapp.com",
  projectId: "react-5178b",
  storageBucket: "react-5178b.appspot.com",
  messagingSenderId: "194002274063",
  appId: "1:194002274063:web:f45e3c83a73363f0ac207a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)