// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRvG4XqhIxSp0OIOsKYtPwZb2V-M79O2s",
  authDomain: "ecommerce-app-a3b99.firebaseapp.com",
  projectId: "ecommerce-app-a3b99",
  storageBucket: "ecommerce-app-a3b99.appspot.com",
  messagingSenderId: "738307790610",
  appId: "1:738307790610:web:11f7f323ee4ae58564c5cb",
  measurementId: "G-P4XH1HP4GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };