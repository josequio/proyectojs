/* const draggable = document.getElementById('draggable');
const droppable = document.getElementById('droppable');

draggable.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
});

droppable.addEventListener('dragover', function(event) {
  event.preventDefault();
});

droppable.addEventListener('drop', function(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  droppable.appendChild(draggableElement);
  event.dataTransfer.clearData();
});

*/
let  inputText =  document.querySelector("#input_text");
let inputColor = document.querySelector("#input_color");
let text = inputText.value;
let color = inputColor.value;

inputText.addEventListener("input",function(ev){
  let text = inputText.value;
})
console.log(text);



inputColor.addEventListener("input",function(ev){
  let color = inputColor.value;
  
})
console.log(color);
