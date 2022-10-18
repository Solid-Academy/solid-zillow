import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAdCxnt7yb5S6xH_wqcG8XPWw5kOoJbvzs",
  authDomain: "solid-zillow-a2db5.firebaseapp.com",
  projectId: "solid-zillow-a2db5",
  storageBucket: "solid-zillow-a2db5.appspot.com",
  messagingSenderId: "450827684675",
  appId: "1:450827684675:web:98b47340752c2d6702bdf6",
  measurementId: "G-M395EY56S9"
});
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export default firebase;
