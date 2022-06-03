import {initializeApp} from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyDM659nGrqIk9IQnMJcxeJB-xhj_39lWF8",
    authDomain: "react-recipe-3c83c.firebaseapp.com",
    databaseURL: "https://react-recipe-3c83c.firebaseio.com",
    projectId: "react-recipe-3c83c",
    storageBucket: "react-recipe-3c83c.appspot.com",
    messagingSenderId: "461326021945",
    appId: "1:461326021945:web:da55aef8fd45841a47e4e8"
  };

const fire = initializeApp(firebaseConfig);

export default fire;