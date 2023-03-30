// ----------chage word-------------------------
const front_bottom_js = document.querySelector('.front_bottom_js');
const words = ['Never give up 🦾',' 👉 You can do it','Never stop learning 🙌','You can dream big 😎'];

let index = 0;
var interval = setInterval(function(){
    front_bottom_js.textContent = words[index++];
    if(index==words.length){
        index=0;
    }
},2500);