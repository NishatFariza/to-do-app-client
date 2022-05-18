// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU0FAOFLLfP5VyFF_3aAyFUa__JxpOGRQ",
  authDomain: "to-do-list-c1ee3.firebaseapp.com",
  projectId: "to-do-list-c1ee3",
  storageBucket: "to-do-list-c1ee3.appspot.com",
  messagingSenderId: "130668394190",
  appId: "1:130668394190:web:c1ff1648eca0787b23429f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;