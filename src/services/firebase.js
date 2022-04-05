import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjndv9UF7fki_q2vLqdhIOj47U9IXn-No",
  authDomain: "cinema-a28a2.firebaseapp.com",
  projectId: "cinema-a28a2",
  storageBucket: "cinema-a28a2.appspot.com",
  messagingSenderId: "338556631490",
  appId: "1:338556631490:web:84ab9f696a67ab6952fe5b"
};

const app = initializeApp(firebaseConfig);
const googleAuth = new GoogleAuthProvider();

export { app, googleAuth };