import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDAhrA1-qKf3dEojVEuwPV0g0CgTpWOQhk",
    authDomain: "mytwiter-e9606.firebaseapp.com",
    projectId: "mytwiter-e9606",
    storageBucket: "mytwiter-e9606.appspot.com",
    messagingSenderId: "90934693645",
    appId: "1:90934693645:web:30bc7f78801e487f642a44",
    measurementId: "G-WJ37TBQJ7H"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);