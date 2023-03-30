// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries  //OJO!!!

import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

// Your web app's Firebase configuration
import firebaseConfig from "./firebaseConfig.js"; //OJO: La configuración se importa desde otro archivo .js
// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth)

