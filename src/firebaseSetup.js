import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, getFireStore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuAR0J1dZSe9C0TsleXiomZjpu9wZQD0w",
    authDomain: "student-login-166bd.firebaseapp.com",
    projectId: "student-login-166bd",
    storageBucket: "student-login-166bd.appspot.com",
    messagingSenderId: "139840150201",
    appId: "1:139840150201:web:3aa53c646349cceb9c9968",
    measurementId: "G-G5MXQVSZ2D"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore();


// const app = initialiseApp(firebaseConfig);
// export const firestore = getFirestore(app);

export {auth};

