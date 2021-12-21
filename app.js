'use strict';
const input = document.querySelector('input');
const addTask = document.querySelector('.taskbtn');
const clearTask = document.querySelector('.cleartask');
const ul = document.querySelector('.list-items');
const closeBtn = document.querySelector('.close');
let tasks = [];

loadEventListener();

function loadEventListener() {
    addTask.addEventListener('click', createTask);
    ul.addEventListener('click', deleteTask);
    clearTask.addEventListener('click', clearTasks);
}
function createTask() {
    // creating the elements
    const newLi = document.createElement('li');
    newLi.className = 'item';
    let inputValue = input.value;
    const newInput = document.createTextNode(inputValue);
    newLi.append(newInput);
    const newSpan = document.createElement('span');
    newSpan.className = 'close';
    newSpan.setAttribute = 'onclick="deleteTask"';
    const text = document.createTextNode('\u00D7');
    newSpan.append(text);
    const newDiv = document.createElement('div');
    newDiv.className = 'row';
    input.value = '';
    //putting out the task
    if(inputValue === '') {
        alert('You must write a task!');
    } else {
        ul.append(newDiv);
        // newDiv.append(row);
        newDiv.append(newLi);
        newDiv.append(newSpan);
        tasks.push(inputValue);
        console.log(tasks);
    }
    
}

function deleteTask(e) {
    //deleting tasks
    const item = e.target;
    if(item.classList[0] === 'close') {
        if(confirm('Are You Sure')) {
            const todo = item.parentElement;
            todo.remove();
        }
    }

}

function clearTasks() {
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}