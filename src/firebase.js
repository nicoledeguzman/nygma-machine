// import firebase from "firebase/app";
// import "firebase/database";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDGGGb95TwGTY8m5p1jAfSmAOZ5Y1iN3SE",
//   authDomain: "juno-zoltan.firebaseapp.com",
//   databaseURL: "https://juno-zoltan-default-rtdb.firebaseio.com",
//   projectId: "juno-zoltan",
//   storageBucket: "juno-zoltan.appspot.com",
//   messagingSenderId: "232035626294",
//   appId: "1:232035626294:web:7e942bf960397c0bddd797"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export default firebase;

import firebase from 'firebase/compat/app';
import "firebase/database";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ7hp5FATGh4QL45xF9r-GlKrb9meBFm0",
  authDomain: "nygma-machine.firebaseapp.com",
  projectId: "nygma-machine",
  storageBucket: "nygma-machine.appspot.com",
  messagingSenderId: "692492057651",
  appId: "1:692492057651:web:d5e9b90cbd1198efccf746"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export default firebase;