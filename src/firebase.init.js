// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2C9X_9YqO2qbIxL_1MATa3cfi3BWOl0M",
  authDomain: "ema-jhon-simple1-9d69e.firebaseapp.com",
  projectId: "ema-jhon-simple1-9d69e",
  storageBucket: "ema-jhon-simple1-9d69e.appspot.com",
  messagingSenderId: "591462533730",
  appId: "1:591462533730:web:5327274f61b27e0fd05f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;