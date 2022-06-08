import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPCNW1oDBUTzeaYcK8NFJ8ghkv2HVf6e4",
    authDomain: "recipe-ac95e.firebaseapp.com",
    projectId: "recipe-ac95e",
    storageBucket: "recipe-ac95e.appspot.com",
    messagingSenderId: "1032953355430",
    appId: "1:1032953355430:web:29e78f0bf74ff6d1506867",
    measurementId: "G-ZF17QW5NQ3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

export default db

