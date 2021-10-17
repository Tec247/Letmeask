// import {initializeApp} from 'firebase/app';

import firebase from 'firebase/compat/app';
// import dotenv from 'dotenv';


import 'firebase/compat/auth';
import 'firebase/compat/database';
const dotenv = require('dotenv');

const firebaseConfig = {    
  
  apiKey: "AIzaSyDwJ-rzdjKV0JlvSvh9oSc142MtjMvk52c",
  authDomain: "letmeask-32d21.firebaseapp.com",
  databaseURL: "https://letmeask-32d21-default-rtdb.firebaseio.com",
  projectId: "letmeask-32d21",
  storageBucket: "letmeask-32d21.appspot.com",
  messagingSenderId: "540563329675",
  appId: "1:540563329675:web:0f26e039e87fe0b73d3a8e"
  
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export {firebase, auth, database}
  dotenv.config();