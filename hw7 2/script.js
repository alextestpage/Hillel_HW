const addBtn = document.querySelector('#addBtn');
const userInput = document.querySelector('#userInput');
const toDoList = document.querySelector('#toDoList');

function onAddBtnClick() {
    if (userInput.value != "") {
        const li = document.createElement('li');
        li.textContent = userInput.value;
        toDoList.append(li);
        userInput.value = "";
    }
}
addBtn.addEventListener('click', onAddBtnClick);