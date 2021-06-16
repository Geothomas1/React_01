import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1a_1XDGi2jCHKZ1D72uWYB1LNxqdshuo",
    authDomain: "olxdemo-ae536.firebaseapp.com",
    projectId: "olxdemo-ae536",
    storageBucket: "olxdemo-ae536.appspot.com",
    messagingSenderId: "636399848286",
    appId: "1:636399848286:web:6f324c198448a5ad47ddcf",
    measurementId: "G-W3ZLG85N2H"
  };
 export const fireBase= firebase.initializeApp(firebaseConfig);