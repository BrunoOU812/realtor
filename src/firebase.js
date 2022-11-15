// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkExlR4GqaUp2a1JEuS3JaKp_eTmJk4js",
  authDomain: "realtor-clone-12995.firebaseapp.com",
  projectId: "realtor-clone-12995",
  storageBucket: "realtor-clone-12995.appspot.com",
  messagingSenderId: "677979834337",
  appId: "1:677979834337:web:493af516b2ed32b00fb4a0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
