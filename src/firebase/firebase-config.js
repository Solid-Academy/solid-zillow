import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdCxnt7yb5S6xH_wqcG8XPWw5kOoJbvzs",
  authDomain: "solid-zillow-a2db5.firebaseapp.com",
  projectId: "solid-zillow-a2db5",
  storageBucket: "solid-zillow-a2db5.appspot.com",
  messagingSenderId: "450827684675",
  appId: "1:450827684675:web:98b47340752c2d6702bdf6",
  measurementId: "G-M395EY56S9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);