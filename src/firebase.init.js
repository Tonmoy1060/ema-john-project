import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv6m4VyJ_fmhfrQQNwrmOWGCzO5Wx5eDc",
  authDomain: "ema-john-project-8baf2.firebaseapp.com",
  projectId: "ema-john-project-8baf2",
  storageBucket: "ema-john-project-8baf2.appspot.com",
  messagingSenderId: "577621143320",
  appId: "1:577621143320:web:c1c76b2da163f382ddf86d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;