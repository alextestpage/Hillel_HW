function createCalculator(baseValue)
 {
    return {
        sum: function (value){
            return baseValue += value;
        },
        sub: function(value){
            return baseValue -= value;
        },
        div: function(value){
            return baseValue /= value;
        },
        mult: function(value){
            return baseValue *= value;
        },
        set: function(value){
            return basevalue = value;
        }

    }
}

const calc = createCalculator(5);
console.log(calc.sum(10));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));