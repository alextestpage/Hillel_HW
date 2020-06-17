const firstArgInput = document.getElementById('firstArgInput');
const secondArgInput = document.getElementById('secondArgInput');
const optionList = document.getElementById('optionList');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', onCalculateBtnClick);

function onCalculateBtnClick() {
    if (!!firstArgInput.value && !!secondArgInput.value) {
        const result = calculate(+firstArgInput.value,
            +secondArgInput.value,
            optionList.value);
        showResult(result);
    } else {
        showError();
    }
}

function calculate(a, b, option) {
    switch (option) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case 'min':
            return Math.min(a, b);
        case 'max':
            return Math.max(a, b);
    }
}

function showError() {
    const div = document.createElement('div');
    div.style = 'color: red; font-size: 24px; font-weight: bold';
    div.textContent = 'Error. Please enter both arguments';
    document.body.append(div);
    setTimeout(() => div.remove(), 2500);
}

function showResult(resultValue) {
    const div = document.createElement('div');
    div.style = 'color: green; font-size: 24px; font-weight: bold;';
    div.textContent = `Result: ${resultValue}`;
    document.body.append(div);
    setTimeout(() => div.remove(), 2500);
}

// }
// Очередной калькулятор
// На странице находятся: 
// Инпут для ввода первого аргмуента
// Селект для выбора действия (+ - / * min max)
// Инпут для ввода второго аргмента
// Кнопка Calculate, при клике на нее, ниже появляется результат операции
// Но если один из аргументов введен неправильно (не число или значение пустое), ниже должен появится не результат, а сообщение об ошибке

// Польоваться калькулятором можно несколько раз, при этом старые результаты и ошибки толжны исчезать