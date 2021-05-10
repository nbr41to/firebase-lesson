import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0ttGhzws0climKFhyWH1p2MD9VJPm8fE",
  authDomain: "fir-lesson-62d9d.firebaseapp.com",
  projectId: "fir-lesson-62d9d",
  storageBucket: "fir-lesson-62d9d.appspot.com",
  messagingSenderId: "985701282283",
  appId: "1:985701282283:web:c47c5e8e9225e4f60629ae"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export { firebase };
