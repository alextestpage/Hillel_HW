function Accordion(el, button, template) {
    this.container = el;
    this.button = button;
    this.template = template;

    this.init();
};

Accordion.prototype.init = function () {
    this.createAccordionElement();
    this.setEventListeners();
};

Accordion.prototype.createAccordionElement = function () {
    this.container.insertAdjacentHTML('afterbegin', this.template)
};

Accordion.prototype.setEventListeners = function () {
    this.container.addEventListener('click', (e) => this.onContainerClick(e));
    this.button.addEventListener('click', (e) => this.onButtonClick(e));
}

Accordion.prototype.onContainerClick = function (e) {
    switch (!!e) {
        case e.target.classList.contains('accordion-heading'):
            this.toggleElement(e.target.parentNode);
            break;
        case e.target.classList.contains('delete-btn'):
            this.deleteElement(e.target.parentNode.parentNode);
            break;
    };
};

Accordion.prototype.onButtonClick = function () {
    this.createAccordionElement();

};

Accordion.prototype.deleteElement = function (el) {
    el.remove();
};

Accordion.prototype.toggleElement = function (el) {
    if (el.classList.contains('open')) {
        this.closeElement(el);
    } else {
        this.openElement(el);
    }
};

Accordion.prototype.closeElement = function (el) {
    el.classList.remove('open');
};

Accordion.prototype.closeAllElements = function () {
    Array.prototype.forEach.call(this.container.children, this.closeElement);
};

Accordion.prototype.openElement = function (el) {
    this.closeAllElements();
    el.classList.add('open');
};

// Accordion.prototype.open = function (index) {
//     this.openElement(this.container.children[index]);
// };

// Accordion.prototype.close = function (index) {
//     this.closeElement(this.container.children[index]);
// };

// Accordion.prototype.toggle = function (index) {
//     this.toggleElement(this.container.children[index]);
// };