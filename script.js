const inputBox = document.querySelector('#input-box');
const listTask = document.querySelector('.list-task');

const boxMessage = document.querySelector('.box-message');
const alertMessage = document.querySelector('.message');

listTask.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveDataTask();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveDataTask();
    }
}, false);

function addTask() {
    if (inputBox.value === '' || inputBox.value === ' ') {
        alertMessage.innerHTML = 'Please write correctly';
        boxMessage.style.display = 'flex';
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        // create delete task icon
        let span = document.createElement('span');
        li.appendChild(span);
    }
    inputBox.value = '';
    saveDataTask();
}

function closeAlertMessage() {
    alertMessage.innerHTML = '';
    boxMessage.style.display = 'none';
}

function saveDataTask() {
    localStorage.setItem('data', listTask.innerHTML);
}

function showTaskList() {
    listTask.innerHTML = localStorage.getItem('data');
}

showTaskList();