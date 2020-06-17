const calcContainer = document.getElementById('container');
const display = document.getElementById('textview');
const clearBtn = document.getElementById('clearBtn');
calcContainer.addEventListener('click', onBtnClick);

function onBtnClick(e) {
    switch (e.target.value) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
        case ')':
        case '(':
        case '+':
        case '-':
        case '*':
        case '/':
            display.value += e.target.value;
            break;
        case 'c':
            display.value = '';
            break;
        case 'dlt':
            (() => display.value = display.value.substring(0, display.value.length - 1))();
            break;
        case '=':
            (() => display.value = eval(display.value))();
    }
}