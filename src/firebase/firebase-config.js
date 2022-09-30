import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZl2J5bCVjDWwUZKlBzgd8xIRonNiSI28",
  authDomain: "solid-zillow.firebaseapp.com",
  projectId: "solid-zillow",
  storageBucket: "solid-zillow.appspot.com",
  messagingSenderId: "1078616344113",
  appId: "1:1078616344113:web:798cbb76dae8dd5b39b710"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);