import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3UcBkCGKGl_o9h1mRgbgs4IQiKTfbDGE",
    authDomain: "vue3-imoney-9c9c3.firebaseapp.com",
    projectId: "vue3-imoney-9c9c3",
    storageBucket: "vue3-imoney-9c9c3.appspot.com",
    messagingSenderId: "510684611215",
    appId: "1:510684611215:web:a190f06f1a191bdaab26fa",
    measurementId: "G-0GY1VMP67J"
};

firebase.initializeApp(firebaseConfig);

const fireStoreCore = firebase.firestore();

export {fireStoreCore};