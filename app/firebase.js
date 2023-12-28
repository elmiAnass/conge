// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBQJpfYh-po9l4sD-JFQYHOBYHxwjyNeI",
  authDomain: "conge1.firebaseapp.com",
  projectId: "conge1",
  storageBucket: "conge1.appspot.com",
  messagingSenderId: "547865615930",
  appId: "1:547865615930:web:4f8ffcf67cf0d863819f03",
  measurementId: "G-RET84ER52X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

