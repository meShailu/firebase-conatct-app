// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2LiHXnvifqfAzpjIO1MwKJDiwFD5B5i0",
  authDomain: "vite-contact-77861.firebaseapp.com",
  projectId: "vite-contact-77861",
  storageBucket: "vite-contact-77861.appspot.com",
  messagingSenderId: "620051635489",
  appId: "1:620051635489:web:7f950f6b1ce44be7d9f260",
  measurementId: "G-8X492TJE0F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
