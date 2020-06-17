function createCalculator(baseValue) {
    return {
        sum: outerValue => baseValue += outerValue,
        sub: outerValue => baseValue -= outerValue,
        mult: outerValue => baseValue *= outerValue,
        div: outerValue => baseValue /= outerValue,
        set: outerValue => baseValue = outerValue,
    }
}

const calculatorInstance = createCalculator(5);
console.log(calculatorInstance.sum(5));
console.log(calculatorInstance.sub(2));
console.log(calculatorInstance.set(1000));
console.log(calculatorInstance.div(20));
console.log(calculatorInstance.mult(10));
console.log(calculatorInstance.div(4));