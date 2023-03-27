import './creatorForm.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc, getDocs, collection, onSnapshot,serverTimestamp,orderBy,query } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

import firebaseConfig from "../firebaseConfig.js"; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
/* console.log(app);
console.log(db); */

let formCreator = document.querySelector("#creatorForm");
console.log(formCreator)

let inputTitleCard = document.querySelector("#titleCard");
let inputTextareaCard = document.querySelector("#textareaCard");
let inputColorCard = document.querySelector("#colorCard");
let inputWordsCard = document.querySelector("#wordsCard");
let inputTraductionWord = document.querySelector("#TraductionWord");

formCreator.addEventListener("submit", function(ev) {
    ev.preventDefault();
    addDoc(collection(db, "card"), { title: inputTitleCard.value, textarea :inputTextareaCard.value, word: inputWordsCard.value, traduction: inputTraductionWord.value, color: inputColorCard.value, createAt: serverTimestamp()}) ;
    formCreator.reset(); 
})


