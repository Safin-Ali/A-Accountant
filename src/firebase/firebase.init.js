// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI-MlDaPVywf2Guv4xBedhUd8jPDndkys",
  authDomain: "a-accountant.firebaseapp.com",
  projectId: "a-accountant",
  storageBucket: "a-accountant.appspot.com",
  messagingSenderId: "426416198144",
  appId: "1:426416198144:web:37b77851f6698a9a0d7ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;