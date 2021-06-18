import firebase  from "firebase";
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8fqM08Q-rXFkN5cpw8RISt7AIrE9AtHg",
    authDomain: "olxclone-a157a.firebaseapp.com",
    projectId: "olxclone-a157a",
    storageBucket: "olxclone-a157a.appspot.com",
    messagingSenderId: "771206470522",
    appId: "1:771206470522:web:2439f90efde9fc03d314c3",
    measurementId: "G-SK4Y3Q5JVC"
  };
 export default firebase.initializeApp(firebaseConfig)