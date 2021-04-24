import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAF6rhIFKsbAdcz8EfUeu-T26SpkJZM3Ww",
    authDomain: "hm-firegram.firebaseapp.com",
    projectId: "hm-firegram",
    storageBucket: "hm-firegram.appspot.com",
    messagingSenderId: "284716811643",
    appId: "1:284716811643:web:17d09501d11aa595aa69de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };