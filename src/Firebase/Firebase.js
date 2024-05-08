import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDoN-nqSGUo_1h87nkOXSXX2vv4IBXBXey0",
  authDomain: "chatify-49q.firebaseapp.com",
  projectId: "chatify-49q",
  storageBucket: "chatify-49q.appspot.com",
  messagingSenderId: "10341858852412",
  appId: "1:1034185885241:web:a46af138b7a40d318de2fe8",
  measurementId: "G-EHQ2YBV3YY9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, provider, storage };

