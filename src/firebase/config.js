import   firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWm543R_3ht7kr3kGKTCO_FC5l0fhCWbE",
  authDomain: "photo-gallery-app-3d08e.firebaseapp.com",
  projectId: "photo-gallery-app-3d08e",
  storageBucket: "photo-gallery-app-3d08e.appspot.com",
  messagingSenderId: "764907014805",
  appId: "1:764907014805:web:c777aa8e77fb1f08a1e99c",
  measurementId: "G-XKWJWFSBZ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };