// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_toTSPS8q_zHlHS-s7_eTfskHO2p2MY",
  authDomain: "library-management-syste-40068.firebaseapp.com",
  projectId: "library-management-syste-40068",
  storageBucket: "library-management-syste-40068.firebasestorage.app",
  messagingSenderId: "269712837810",
  appId: "1:269712837810:web:87645dc1a0a109b75c8dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=  getStorage(app);