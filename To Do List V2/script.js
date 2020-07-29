const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const APP = document.getElementById('app');
const TASK_ITEM_CLASS = 'task';
const DELETE_ITEM_CLASS = 'delete-btn';
const TASK_COMPLETE_CLASS = 'true';
let todosList = [];

APP.addEventListener('click', onElementClick);

fetchData();


function fetchData() {
    fetch(TODOS_URL)
        .then((response) => response.json())
        .then(setUpData);
}


function setUpData(data) {
    console.log(data);
    todosList = data;
    const html = data.map(task => {
        return `<div class="task ${task.completed}" data-task-id="${task.id}">Title: ${task.title}. <span class="delete-btn">⌫</span></div>`;
    }).join('');
    renderData(html);

};

function renderData(html) {
    APP.insertAdjacentHTML('afterbegin', html);
}

function onElementClick(e) {
    switch (true) {
        case e.target.classList.contains(TASK_ITEM_CLASS):
            toggleTaskState(e.target);
            break;
        case e.target.classList.contains(DELETE_ITEM_CLASS):
            deleteTask(e.target.parentElement);
    }
}

function toggleTaskState(el) {
    el.classList.toggle(TASK_COMPLETE_CLASS);
}

function deleteTask(el) {
    const taskId = el.dataset.taskId;
    console.log(taskId);

    todosList = todosList.filter((task) => task.id != taskId);

    el.remove();
}