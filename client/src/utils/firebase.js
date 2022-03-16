// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh3dtcenRTzjhQEL19D_sUHdrsuSPYN1Q",
  authDomain: "project-3-2b342.firebaseapp.com",
  projectId: "project-3-2b342",
  storageBucket: "project-3-2b342.appspot.com",
  messagingSenderId: "577270026894",
  appId: "1:577270026894:web:04917fb00a9ade42186fdf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage();

export { app, storage};