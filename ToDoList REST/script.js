const TODOS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';
const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'true';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;


let todos = [];


addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

initState();

function onTaskListClick(event) {
    switch (true) {
        case event.target.classList.contains(TASK_ITEM_CLASS):
            toggleTaskState(event.target.dataset.id);
            break;
        case event.target.classList.contains(DELETE_BTN_CLASS):
            deleteTask(event.target.parentNode.dataset.id);
            break;
    }
}

function initState() {
    getTasks()
        .then(setTasks)
        .then(renderData)
};


function getTasks() {
    return fetch(TODOS_URL)
        .then((response) => response.json())
}

function setTasks(data) {
    return (todos = data);

}

function renderData(data) {
    taskList.innerHTML = data.map(generateDataHtml).join('\n');

};

function generateDataHtml(todo) {
    return taskItemTemplate
        .replace('{{id}}', todo.id)
        .replace('{{title}}', todo.title)
        .replace('{{completeClass}}', todo.isDone ? 'done' : '');
}


function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
}



function submitForm() {
    const task = {
        title: taskNameInput.value,
        isDone: false
    };

    if (isValid(task.title)) {
        addTaskOnServer(task);
        resetForm();
    }
}

function addTask(task) {

    todos.push(task);

    renderData(todos);
}

function addTaskOnServer(task) {
    return fetch(TODOS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        .then((res) => res.json())
        .then((data) => addTask(data));

}

function resetForm() {
    addTaskForm.reset();
}

function toggleTaskState(id) {
    console.log(id);
    const todo = todos.find((todo) => todo.id === id);

    todo.isDone = !todo.isDone;

    fetch(`${TODOS_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    console.log(`zdarova`, todos);
    renderData(todos);
}

function deleteTask(id) {
    fetch(`${TODOS_URL}/${id}`, {
        method: 'DELETE',
    });

    todos = todos.filter((todo) => todo.id !== id);
    renderData(todos);
}

function isValid(value) {
    if (value.trim() !== '') {
        return value;
    }
}