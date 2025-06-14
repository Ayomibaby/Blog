import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const apiKey = import.meta.env.VITE_APP_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blog-project-be589.firebaseapp.com",
  projectId: "blog-project-be589",
  storageBucket: "blog-project-be589.firebasestorage.app",
  messagingSenderId: "25123219057",
  appId: "1:25123219057:web:fac1071da43f2759025dd0",
  measurementId: "G-VLZH71ZGHK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};