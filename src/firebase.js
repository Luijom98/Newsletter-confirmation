// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1vI7A9yvcTRGe6eMr_t94xHsVIGruLt0",
    authDomain: "newsletterdemo-a5899.firebaseapp.com",
    projectId: "newsletterdemo-a5899",
    storageBucket: "newsletterdemo-a5899.appspot.com",
    messagingSenderId: "1074440971940",
    appId: "1:1074440971940:web:f146fc12a81a24c5706831",
    measurementId: "G-X472H937EJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;