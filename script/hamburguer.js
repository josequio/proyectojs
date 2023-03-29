
// --------------------------navegation--------

const nav_list = document.querySelector('.nav_list');
const header_btn_access = document.querySelector('.header_btn_access');
const btn_humbg = document.querySelector('.btn_humbg');

btn_humbg.addEventListener('click',()=>{
    nav_list.classList.toggle('activo');
    header_btn_access.classList.toggle('activo');
});