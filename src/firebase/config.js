import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2CXfzsO2rL9OHjzkkbcB5K7EqH9gXNFs",
    authDomain: "mateuspedroso-firegram.firebaseapp.com",
    databaseURL: "https://mateuspedroso-firegram.firebaseio.com",
    projectId: "mateuspedroso-firegram",
    storageBucket: "mateuspedroso-firegram.appspot.com",
    messagingSenderId: "457506439522",
    appId: "1:457506439522:web:17f5e527fdf57ec7bf2c3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {
      projectStorage,
      projectFirestore,
      timeStamp
  }