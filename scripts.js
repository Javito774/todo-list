const addTaskElement = document.getElementById('addTask');
const maxTasks = 3;

const inputElement = document.querySelector('#addTaskInput');
const listElement = document.querySelector('ul');

const currentNumber = document.getElementById('number');
const maxNumber = document.getElementById('total');

maxNumber.textContent = maxTasks;
updateCurrentNumber();

function addTask() {
    if (inputElement.value.trim() != '' && listElement.children.length < maxTasks) {
        let newElement = document.createElement('li');
        newElement.innerHTML = '<div><input type="checkbox" /><p>' + inputElement.value + '</p></div><img src="delete.svg" />';
        let domElemet = listElement.appendChild(newElement);
        updateCurrentNumber();
        domElemet.querySelector('img').addEventListener('click', removeTask);
        if(listElement.children.length >= maxTasks) {
            document.querySelector('main').classList.add('full');
        }
    }
}

function removeTask(event) {
    event.target.parentNode.remove();
    updateCurrentNumber();
    document.querySelector('main').classList.remove('full');
}

function updateCurrentNumber() {
    currentNumber.textContent = listElement.children.length;
}

addTaskElement.addEventListener('click', addTask);
