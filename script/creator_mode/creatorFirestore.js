import './creatorForm.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc, getDocs, collection, onSnapshot, serverTimestamp, orderBy, query } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

import {getStorage, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js"

import firebaseConfig from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/* const storage = getStorage(app);
const storageRef = ref(storage); */
/* console.log(app);
console.log(db); */

//----------codigo para subir una imagen a storage de firebase----------------------
/* const inputImageCard = document.querySelector("#imageCard").file[0];
console.log(inputImageCard); */


//---------------------------------------------------------------------

let formCreator = document.querySelector("#creatorForm");
console.log(formCreator)

let inputTitleCard = document.querySelector("#titleCard");
let inputTextareaCard = document.querySelector("#textareaCard");
let inputColorCard = document.querySelector("#colorCard");
let inputWordsCard = document.querySelector("#wordsCard");
let inputTraductionWord = document.querySelector("#TraductionWord");
let inputImageCard = document.querySelector("#imageCard");

formCreator.addEventListener("submit", function (ev) {
    ev.preventDefault();
    addDoc(collection(db, "card"), { title: inputTitleCard.value, textarea: inputTextareaCard.value, word: inputWordsCard.value, traduction: inputTraductionWord.value, color: inputColorCard.value, createAt: serverTimestamp() });
    formCreator.reset();
})

let ulTopicsContainer = document.querySelector("#topics_ul");


/* console.log(ulTopicsContainer)
console.log(displayTitle) */
// --------------------cargar el titulo desde firestore en un button-------------
let queryCards = query(collection(db, 'card'), orderBy('createAt','desc'));

onSnapshot(queryCards, function (querySnapshot) {
    ulTopicsContainer.innerHTML = '';
    querySnapshot.forEach(function (doc) {
        let objetoDocumento = doc.data();
        /* console.log(objetoDocumento); */


        const li = document.createElement("li");
        li.innerHTML = `
            <div class="topics_button">
              <details>
               <summary>
                 <span style =" font-weight:bolder">title: </span> ${objetoDocumento.title}
               </summary>
               <div>
                 <span style =" font-weight:bolder">text: </span>:${objetoDocumento.textarea} <br>
                 <span style =" font-weight:bolder">word: </span>:${objetoDocumento.word} <br>
                 <span style =" font-weight:bolder">traduction: </span>:${objetoDocumento.traduction} <br>
                 <span style =" font-weight:bolder">color: </span>:${objetoDocumento.color}<br>
                 <span style =" font-weight:bolder">color: </span>:${objetoDocumento.createAt.toDate()}
               </div>
              </details>
            </div>
        `;
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                ulTopicsContainer.appendChild(li);
            })
        } else {
            ulTopicsContainer.appendChild(li);
        }

    });

});


