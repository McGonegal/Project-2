// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEZlmJ34q9lPxt2FOlhi25X2o4bikAqkQ",
  authDomain: "nealandkrisproject2.firebaseapp.com",
  databaseURL: "https://nealandkrisproject2-default-rtdb.firebaseio.com",
  projectId: "nealandkrisproject2",
  storageBucket: "nealandkrisproject2.appspot.com",
  messagingSenderId: "998374217295",
  appId: "1:998374217295:web:2d6312b5e5c1c1fc93bc3a"
};

// Initialize Firebase
const firebaseInfo = initializeApp(firebaseConfig);

export default firebaseInfo;