import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

import {auth} from "./firebase.js";

const  form_idea = document.querySelector("#form_idea");

form_idea.addEventListener('submit', async ev => {
    ev.preventDefault();
    const email = form_idea['email'].value;
    const password = form_idea['password'].value;
    
    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);
    }catch(error){
        /* console.log(error.message);
        console.log(error.code); */
        if (error.code === 'auth/wrong-password'){
            alert('Invalid password')
        }else if (error.code === 'auth/user-not-found'){
            alert('Invalid email')
        }else if(error.code){
            alert('Something went wrong');
        }
    }

})
/* 
time 1.21 */