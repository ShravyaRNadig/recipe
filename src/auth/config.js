// import {initializeApp} from 'firebase/app';

// var firebaseConfig = {
//     apiKey: "AIzaSyDM659nGrqIk9IQnMJcxeJB-xhj_39lWF8",
//     authDomain: "react-recipe-3c83c.firebaseapp.com",
//     databaseURL: "https://react-recipe-3c83c.firebaseio.com",
//     projectId: "react-recipe-3c83c",
//     storageBucket: "react-recipe-3c83c.appspot.com",
//     messagingSenderId: "461326021945",
//     appId: "1:461326021945:web:da55aef8fd45841a47e4e8"
//   };

// const fire = initializeApp(firebaseConfig);

// export default fire;

// import firebase from 'firebase';

// var firebaseConfig = {
// 	// Firebase credentials
//   apiKey: "AIzaSyDM659nGrqIk9IQnMJcxeJB-xhj_39lWF8",
//   authDomain: "react-recipe-3c83c.firebaseapp.com",
//   projectId: "react-recipe-3c83c",
//   storageBucket: "react-recipe-3c83c.appspot.com",
//   messagingSenderId: "461326021945",
//   appId: "1:461326021945:web:da55aef8fd45841a47e4e8"
// };
	
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

// export default db;


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCPCNW1oDBUTzeaYcK8NFJ8ghkv2HVf6e4",
//   authDomain: "recipe-ac95e.firebaseapp.com",
//   projectId: "recipe-ac95e",
//   storageBucket: "recipe-ac95e.appspot.com",
//   messagingSenderId: "1032953355430",
//   appId: "1:1032953355430:web:29e78f0bf74ff6d1506867",
//   measurementId: "G-ZF17QW5NQ3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db