module.exports = {
    set: outerValue => baseValue = outerValue,
    sum: outerValue => baseValue += outerValue,
    sub: outerValue => baseValue -= outerValue,
    mult: outerValue => baseValue *= outerValue,
    div: outerValue => baseValue /= outerValue,


};