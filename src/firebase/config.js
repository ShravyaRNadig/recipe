import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM659nGrqIk9IQnMJcxeJB-xhj_39lWF8",
  authDomain: "react-recipe-3c83c.firebaseapp.com",
  databaseURL: "https://react-recipe-3c83c-default-rtdb.firebaseio.com",
  projectId: "react-recipe-3c83c",
  storageBucket: "react-recipe-3c83c.appspot.com",
  messagingSenderId: "461326021945",
  appId: "1:461326021945:web:da55aef8fd45841a47e4e8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

export default db

