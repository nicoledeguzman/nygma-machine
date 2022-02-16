import firebase from 'firebase/app';
import "firebase/database";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMqSu3mfoitybJl-ceZx3dqfxshiFvM8",
  authDomain: "asdf-187c0.firebaseapp.com",
  projectId: "asdf-187c0",
  storageBucket: "asdf-187c0.appspot.com",
  messagingSenderId: "299385242427",
  appId: "1:299385242427:web:190a402eeca451ff79ed1e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export default firebase;
