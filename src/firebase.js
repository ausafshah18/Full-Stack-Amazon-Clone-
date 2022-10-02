// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyADfH9omHhM6MxGkAyAntDIUfvUIZFAQ9s",
    authDomain: "challenge-c8815.firebaseapp.com",
    projectId: "challenge-c8815",
    storageBucket: "challenge-c8815.appspot.com",
    messagingSenderId: "850694650348",
    appId: "1:850694650348:web:6bffd30acc54d442c068c9",
    measurementId: "G-VGQM5XG1DC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) // initialization
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); // it gives us a variable that will be used for signing in and all that

  export {db, auth};