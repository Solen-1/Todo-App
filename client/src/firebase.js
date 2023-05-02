// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7KWm0ubtZwuDArlRMPbe3iTvSE_xpZeQ",
  authDomain: "todo-list-dc350.firebaseapp.com",
  projectId: "todo-list-dc350",
  storageBucket: "todo-list-dc350.appspot.com",
  messagingSenderId: "84114584533",
  appId: "1:84114584533:web:021bda933a4b929abc435c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export {app, auth}