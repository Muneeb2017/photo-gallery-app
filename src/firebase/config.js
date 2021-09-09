import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3U7-ncCWJ6A8qV1jGK72pe7iNpsbQouk",
  authDomain: "photo-gallery-app-54db1.firebaseapp.com",
  databaseURL: "https://photo-gallery-app-54db1-default-rtdb.firebaseio.com",
  projectId: "photo-gallery-app-54db1",
  storageBucket: "photo-gallery-app-54db1.appspot.com",
  messagingSenderId: "450287699028",
  appId: "1:450287699028:web:18f3935ebc1623e61599c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };