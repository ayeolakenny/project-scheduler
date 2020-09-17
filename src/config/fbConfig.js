import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA8cTYhpRIMQEPNC9TNpg_LGih5-t_eQbs",
  authDomain: "kennytestfirestore.firebaseapp.com",
  databaseURL: "https://kennytestfirestore.firebaseio.com",
  projectId: "kennytestfirestore",
  storageBucket: "kennytestfirestore.appspot.com",
  messagingSenderId: "1082656483682",
  appId: "1:1082656483682:web:879c4d746716c3bab0e43b",
  measurementId: "G-J26WW1YQBM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;