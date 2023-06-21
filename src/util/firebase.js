import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyBlpaxf8Vpx0JvkQuPB2vCD-28saRbj08A",
  authDomain: "flash-it-app-23417.firebaseapp.com",
  databaseURL: "https://flash-it-app-23417-default-rtdb.firebaseio.com",
  projectId: "flash-it-app-23417",
  storageBucket: "flash-it-app-23417.appspot.com",
  messagingSenderId: "759669169510",
  appId: "1:759669169510:web:a3737320879f31275e7ca7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;


