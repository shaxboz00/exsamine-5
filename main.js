 const createTodoButton = document.querySelector('.todo button');
 const createInProgressButton = document.querySelector('.in-progress button');
 const createDoneButton = document.querySelector('.done button');
 const todoContainer = document.querySelector('.todo');
 const inProgressContainer = document.querySelector('.in-progress');
 const doneContainer = document.querySelector('.done');


function createTask(container, taskDescription) {
  const taskBox = document.createElement('div');
  taskBox.classList.add(`${container}-box`);

  const taskParagraph = document.createElement('p');
  taskParagraph.textContent = taskDescription;

  taskBox.appendChild(taskParagraph);

  if (container === 'todo') {
    todoContainer.insertBefore(taskBox, createTodoButton);
  } else if (container === 'in-progress') {
    inProgressContainer.insertBefore(taskBox, createInProgressButton);
  } else if (container === 'done') {
    doneContainer.insertBefore(taskBox, createDoneButton);
  }
}


createTodoButton.addEventListener('click', function() {
  const taskDescription = prompt('TODO GA YENGI DIV');
  if (taskDescription) {
    createTask('todo', taskDescription);
    
  }
});


createInProgressButton.addEventListener('click', function() {
  const taskDescription = prompt('IN PROGRESS GA YENGI DIV');
  if (taskDescription) {
    createTask('in-progress', taskDescription);
  }
});


createDoneButton.addEventListener('click', function() {
  const taskDescription = prompt('DONE GA YENGI DIV');
  if (taskDescription) {
    createTask('done', taskDescription);
  }
});



const todoBoxes = document.querySelectorAll(".todo-box");
const inProgressBoxes = document.querySelectorAll(".in-progress-box");
const doneBoxes = document.querySelectorAll(".done-box");

let draggedBox = null;

function handleDragStart(event) {
  draggedBox = this;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  event.dataTransfer.dropEffect = "move";
  return false;
}

function handleDrop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  if (draggedBox !== this) {
    draggedBox.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
  }
  return false;
}

todoBoxes.forEach(box => {
  box.addEventListener("dragstart", handleDragStart, false);
  box.addEventListener("dragover", handleDragOver, false);
  box.addEventListener("drop", handleDrop, false);
});

inProgressBoxes.forEach(box => {
  box.addEventListener("dragstart", handleDragStart, false);
  box.addEventListener("dragover", handleDragOver, false);
  box.addEventListener("drop", handleDrop, false);
});

doneBoxes.forEach(box => {
  box.addEventListener("dragstart", handleDragStart, false);
  box.addEventListener("dragover", handleDragOver, false);
  box.addEventListener("drop", handleDrop, false);
});