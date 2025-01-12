// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEVpmsIrHFxd1GTn13RrE64R0glenGIRU",
    authDomain: "luszdzet.firebaseapp.com",
    projectId: "luszdzet",
    storageBucket: "luszdzet.firebasestorage.app",
    messagingSenderId: "399316364652",
    appId: "1:399316364652:web:d817890b11a205c10d9749",
    measurementId: "G-KC6FB6SSE4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);