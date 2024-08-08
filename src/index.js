// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7v3CLJNkNrtTCANUlnwyff_J9lumCHRQ",
  authDomain: "gettingstartedwithfireba-7044d.firebaseapp.com",
  projectId: "gettingstartedwithfireba-7044d",
  storageBucket: "gettingstartedwithfireba-7044d.appspot.com",
  messagingSenderId: "657972083231",
  appId: "1:657972083231:web:20fb4eea95e75fafe2b32a",
  measurementId: "G-2HRFT95CXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)