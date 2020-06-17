const addBtn = document.getElementById('addBtn');
const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('toDoList');


function onAddBtnClick() {
	if (isValid(userInput.value)) {
		const newOlEl = document.createElement('ol');
		const li = document.createElement('li');
		document.body.append(newOlEl);
		li.textContent = userInput.value;
		newOlEl.append(li);
		userInput.value = "";
	}
	// else{
	// 	const div = document.createElement('div');
	// 	div.style = 'color: red; font-size: 25px; font-weight: bold';
	// 	div.innerHTML = "<q><i>U dumb <br> mothafocka</i></q> ";
	// 	console.log(div);
	// 	document.body.append(div);
	// 	userInput.value = '';
	// }
}
addBtn.addEventListener('click', onAddBtnClick);

function isValid(value) {
	if (value.trim() !== '') {
		return value;
	}
}