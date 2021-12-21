import DataRecords from './DataRecords'
import firebase from "firebase"
import "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAin1hzy-zANOTKsKrR7z0WYMLQr4gWouA",
    authDomain: "hs-admin-t.firebaseapp.com",
    projectId: "hs-admin-t",
    storageBucket: "hs-admin-t.appspot.com",
    messagingSenderId: "550068271723",
    appId: "1:550068271723:web:09a4ff75502701190bcf2e",
    measurementId: "G-8C3YJ3QZC3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();