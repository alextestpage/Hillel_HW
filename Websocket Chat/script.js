const socket = new WebSocket("wss://fep-app.herokuapp.com/");
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const addMessageForm = document.getElementById('addMessageForm');
const messagesList = document.getElementById('messagesList');

addMessageForm.addEventListener('submit', onSubmitButtonClick);

const completeMessage = {
    type: 'message',
    payload: {
        username: '',
        message: ''
    }
};

function onSubmitButtonClick(e) {

    e.preventDefault();

    submitForm();
    resetInputs();
}

socket.onopen = () => {
    console.log('connected')

};

socket.onmessage = (e) => {
    renderData(JSON.parse(e.data));
};

socket.onclose = (e) => {
    console.log('chat finished');

}




function renderData(message) {
    return messagesList.innerHTML = `<pre><div class="message-item">Author: ${message.payload.username}      Message: ${message.payload.message}</div></pre>`;
}


function submitForm() {
    getMessage();
    console.log(completeMessage);

    socket.send(JSON.stringify(completeMessage));

}

function getMessage() {
    completeMessage.payload.username = nameInput.value;
    completeMessage.payload.message = messageInput.value;
}

function resetInputs() {
    nameInput.value = '';
    messageInput.value = '';
}