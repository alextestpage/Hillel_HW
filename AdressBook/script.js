'use strict';
const URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_BTN_CLASS = 'delete-btn';

const listEl = document.getElementById('userList')
const nameInputEL = document.getElementById('userName');
const phoneInputEL = document.getElementById('userPhone');
const addBtnEL = document.getElementById('addUserBtn');
const userTemplate = document.getElementById('userTemplate').innerHTML;

let list = [];

listEl.addEventListener('click', onListElCLick);
addBtnEL.addEventListener('click', )
init();

function onListElCLick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteItem(e.target.closest('.item').dataset.id);

    }
}

function init() {
    getList();
}

function getList() {
    fetch(URL).then((res) => res.json())
        .then(setData)
        .then(renderList);
}

function setData(data) {
    return (list = data);
}

function renderList(data) {
    listEl.innerHTML = data.map(getItemElementHtml).join('');
}

function getItemElementHtml(item) {
    return userTemplate
        .replace('{{id}}', item.id)
        .replace('{{name}}', item.name)
        .replace('{{phone}}', item.phone);
}

function deleteItem(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

    list = list.filter(item => item.id != id);

    renderList(list);
}

function submitForm() {
    const item = {
        name: nameInputEL.value,
        phone: phoneInputEL.value,
    }

    fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(item);
        })
        .then(res => res.json())
        .then(() => {
            list.push(data);
            renderList(list);

            // clearForm();
        })
}