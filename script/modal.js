//-------------FORMA UNO---------------
/* let btnAccess = document.querySelector(".header_btn_access");
let modal = document.querySelector(".modal");
let btnModalCerrar = document.querySelector(".modal_close");


btnAccess.addEventListener("click",function(ev){
    ev.preventDefault();
   modal.style.display = "flex"

});

btnModalCerrar.addEventListener("click",function(ev){
    ev.preventDefault();
    modal.style.display = "none"
}); */

//FORMA DOS:
const openModal = document.querySelector(".modal_open");
const modal = document.querySelector(".modal");
const speakcardsModal = document.querySelector("#speakcards_modal");
const goModal = document.querySelector("#go_modal");

const closeModal = document.querySelector("#modal_close");
const closeModalreadcards = document.querySelector("#modal_close_readcards");
console.log(closeModalreadcards)

function showModal(ev){
    ev.preventDefault();
    modal.classList.add("modal--show");
};

function hideModal(ev){
    ev.preventDefault();
    modal.classList.remove("modal--show");
};

openModal.addEventListener("click",showModal);
speakcardsModal.addEventListener("click",showModal);
goModal.addEventListener("click",showModal);


closeModal.addEventListener("click", hideModal);
closeModalreadcards.addEventListener("click", hideModal);

