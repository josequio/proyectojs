const draggable = document.getElementById('draggable');
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