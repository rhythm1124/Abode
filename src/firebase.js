// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwr0_f28jhT43F_YdOQYMT5XW6eM2gAk",
  authDomain: "bookshelf-7c736.firebaseapp.com",
  projectId: "bookshelf-7c736",
  storageBucket: "bookshelf-7c736.appspot.com",
  messagingSenderId: "282439377195",
  appId: "1:282439377195:web:234db618ecdeaa1258256e",
  measurementId: "G-0T6M5X86LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app