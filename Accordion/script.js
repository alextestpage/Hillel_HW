const CONTAINER = document.getElementById('container');
const NEW_ELEM_BUTTON = document.getElementById('newAccordElemBtn');
const ACC_ELEM_TEMPLATE = document.getElementById('accordItemTemplate').innerHTML;
const acc = new Accordion(CONTAINER, NEW_ELEM_BUTTON, ACC_ELEM_TEMPLATE);

// acc.open(0);
// setInterval(() => acc.initClasses(), 3000);