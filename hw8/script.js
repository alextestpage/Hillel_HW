const colorInput = document.getElementById('elColor');
const shapeSelect = document.getElementById('elShape');
const shapeEl = document.getElementById('shape');

colorInput.addEventListener('change', onColorChange);
shapeSelect.addEventListener('change', onShapeChange);
document.addEventListener('keydown', onDocumentKeyDown);

init();

function init() {
    setPosition({
        top: 100,
        left: 100
    });
    setColor('red');
    setShape('square');
}


function onDocumentKeyDown(e) {
    switch (e.keyCode) {
        case 39:
            moveTo(10, 0);
            break;
        case 37:
            moveTo(-10, 0);
            break;
        case 38:
            moveTo(0, -10);
            break;
        case 40:
            moveTo(0, 10);
            break;
    }
}

function onShapeChange() {
    setShape(shapeSelect.value);
}

function setShape(shape) {
    shapeEl.className = 'figure ' + shape;
}


function onColorChange() {
    const color = colorInput.value;
}

function setColor(color) {
    shapeEl.style.backgroundColor = color;
}

function moveTo(x, y) {
    setPosition({
        top: shapeEl.offsetTop + y,
        left: shapeEl.offsetLeft + x,
    });
}

function setPosition(pos) {
    shapeEl.style.top = pos.top + 'px';
    shapeEl.style.left = pos.left + 'px';
}