// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHnECzRB9vKaCiu6ooRYOc8GO3_TVaACs",
    authDomain: "whatapp-65d6e.firebaseapp.com",
    projectId: "whatapp-65d6e",
    storageBucket: "whatapp-65d6e.appspot.com",
    messagingSenderId: "811905921735",
    appId: "1:811905921735:web:693baf9062e214e11b84e2",
    measurementId: "G-87XRSYCQDR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    const firebaseApp= firebase.initializeApp(firebaseConfig);
    //setting db
     const db=  firebaseApp.firestore(); 
     //Authentication Handler
     const auth = firebase.auth();
     //Google authentication provided by google
    const provider = new firebase.auth.GoogleAuthProvider();

    export {auth, provider};
    export default db;