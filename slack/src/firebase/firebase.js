import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCeryf9VT1-luGEyfDts2NGepFNpOw5YQ",
  authDomain: "twitter-clone-bc3ba.firebaseapp.com",
  databaseURL: "https://twitter-clone-bc3ba.firebaseio.com",
  projectId: "twitter-clone-bc3ba",
  storageBucket: "twitter-clone-bc3ba.appspot.com",
  messagingSenderId: "399095927582",
  appId: "1:399095927582:web:d2ebc3517bdc43ee1b6f0f",
  measurementId: "G-VM36M008Q9",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
