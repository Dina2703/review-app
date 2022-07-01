// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfzMh6hCsvBiEhw7TusZn1pmz3tXsI1mQ",
  authDomain: "review-app-57a55.firebaseapp.com",
  projectId: "review-app-57a55",
  storageBucket: "review-app-57a55.appspot.com",
  messagingSenderId: "12895630108",
  appId: "1:12895630108:web:c11b97b2759067e44e80d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
