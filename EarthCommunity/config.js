import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAFkSjAIfG7FA6Kxox7cNmz8lNZifTxtzw",
    authDomain: "ec-earth-community.firebaseapp.com",
    projectId: "ec-earth-community",
    storageBucket: "ec-earth-community.appspot.com",
    messagingSenderId: "1062333953119",
    appId: "1:1062333953119:web:112f5d1248b5d2d27757ea",
    measurementId: "G-TX4R0D8TVW"
  
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export {firebase};