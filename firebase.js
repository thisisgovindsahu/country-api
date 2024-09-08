import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrSdFmDGaB0rqyie7eIEKxhaka0bo8SZI",
  authDomain: "react-otp-work-eee85.firebaseapp.com",
  projectId: "react-otp-work-eee85",
  storageBucket: "react-otp-work-eee85.appspot.com",
  messagingSenderId: "952747947630",
  appId: "1:952747947630:web:a5c07d5fff48810868187f",
  measurementId: "G-W2KPWPZ2GH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
