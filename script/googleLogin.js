import {GoogleAuthProvider, sigInwithPopup} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"


const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider(); //crear una instancia de un tipo de objeto a partir de la class GoogleAuthProvider
    await sigInwithPopup(auth, provider)
})