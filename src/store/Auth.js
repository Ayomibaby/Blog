import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export const signUp =(email, password)=> createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    localStorage.setItem("userDetails", userCredential)
}).catch((err)=>{
    console.log(err)
})