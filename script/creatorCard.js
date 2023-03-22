const cardTitle = document.querySelector(".card_title");
const cardText = document.querySelector(".card_text");


let inputTitleCard = document.querySelector("#titleCard");
let inputparagraphCard = document.querySelector("#paragraphCard");
let inputImageCard = document.querySelector("#imageCard");


inputTitleCard.addEventListener('input',function(ev){
    console.log(inputTitleCard.value);//se imprime el valor ingesado.
    cardTitle.textContent = inputTitleCard.value;
});

inputparagraphCard.addEventListener('input',function(ev){
    console.log(inputparagraphCard.value);//se imprime el valor ingesado.
    cardText.textContent = inputparagraphCard.value;
});


inputImageCard.addEventListener('input',function(ev){
    let image = ev.target.file[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function(){ /* onload: cuando finalice de caragr lo requeride en la variblae reader */
        let cardImg = document.getElementById("cardImg");
        console.log(reader.result);
        cardImg.src = reader.result;

    }
});

