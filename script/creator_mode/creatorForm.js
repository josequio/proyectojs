const cardTitle = document.querySelector(".card_title");
const cardTextP = document.querySelector("#card_text-p");


let inputTitleCard = document.querySelector("#titleCard");
let inputTextareaCard = document.querySelector("#textareaCard");
let inputImageCard = document.querySelector("#imageCard");
let inputColorCard = document.querySelector("#colorCard");
let inputWordsCard = document.querySelector("#wordsCard");

let inputTraductionWord = document.querySelector("#TraductionWord");

//Evento para elemento input - titulo del card

inputTitleCard.addEventListener('input', function (ev) {
    /* console.log(inputTitleCard.value); *///se imprime el valor ingesado.
    cardTitle.textContent = inputTitleCard.value;
});

/* Evento para elemento input - cuerpo de  card*/
/* inputTextareaCard.addEventListener('input',function(ev){
    //console.log(inputTextareaCard.value); //se imprime el valor ingesado.
    cardTextP.textContent = inputTextareaCard.value;
    console.log(cardTextP.innerHTML);

});  */

// Evento para elemento input - imagen de la card
/* inputImageCard.addEventListener('input', function (ev) {
    let image = ev.target.file[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function () { // onload: cuando finalice de caragr lo requeride en la variblae reader 
        let cardImg = document.getElementById("cardImg");
        console.log(reader.result);
        cardImg.src = reader.result;

    }
});*/
/* Evento para elemento input - palabra o frase y color*/

/* inputWordsCard.addEventListener("input",function(ev){                                            

    inputColorCard.addEventListener('input',function(ev){
    
        if(inputTextareaCard.value.includes(inputWordsCard.value)){
            cardTextP.style.color = inputColorCard.value;
        }else{
            cardTextP.style.color = "white";
        }
    })
})
 */
/* inputWordsCard.addEventListener("input",function(ev){    
     inputColorCard.addEventListener('input',function(ev){
            cardTextP.replace(inputColorCard.value,`<span style=color: ${inputColorCard.value}> ${inputWordsCard} </span>`)
    });                
}) */



inputTextareaCard.addEventListener('input', function (ev) {
    //console.log(inputTextareaCard.value); //se imprime el valor ingesado.
    cardTextP.textContent = inputTextareaCard.value;
    //onsole.log(cardTextP.innerHTML); 
    let contentText = cardTextP.innerHTML;
    inputWordsCard.addEventListener("input", function (ev) {
        let contentUpdated = contentText.replace(inputWordsCard.value,`<span id = "spanColor"> ${inputWordsCard.value} </span>`);
            cardTextP.innerHTML = contentUpdated;
    })

});

inputColorCard.addEventListener('input', function (ev) {
    let spanColor = document.querySelector("#spanColor");
    spanColor.style.color = inputColorCard.value;
});

inputTraductionWord.addEventListener('input',function(ev){
    let spanColor = document.querySelector("#spanColor");
    spanColor.setAttribute('title',inputTraductionWord.value);
});  