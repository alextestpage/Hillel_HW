const SIZE_SMALL = {
    price: 50,
    ccal: 20
};

const SIZE_MEDIUM = {
    price: 75,
    ccal: 30,
};

const SIZE_LARGE = {
    price: 100,
    ccal: 40,
};

const TOPPING_CHEESE = {
    price: 10,
    ccal: 20,
};

const TOPPING_SALAD = {
    price: 20,
    ccal: 5,
};

const TOPPING_POTATOE = {
    price: 15,
    ccal: 10,
};

const TOPPING_SPICES = {
    price: 15,
    ccal: 0,
};

const TOPPING_MAYO = {
    price: 20,
    ccal: 5,
};

function Hamburger(type) {
    this.price = type.price;
    this.ccal = type.ccal;
};

Hamburger.prototype.getCallories = function () {
    return this.ccal
}

Hamburger.prototype.getPrice = function () {
    return this.price
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price;
    this.ccal += topping.ccal;

}

const burger = new Hamburger(SIZE_LARGE);