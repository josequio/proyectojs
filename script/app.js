let btnAccess = document.querySelector(".header_btn_access");
let modal = document.querySelector(".modal");
let btnModalCerrar = document.querySelector(".modal_cerrar");


btnAccess.addEventListener("click",function(ev){
   modal.style.display = "flex"

});

btnModalCerrar.addEventListener("click",function(ev){
    modal.style.display = "none"
});

