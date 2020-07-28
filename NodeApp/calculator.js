let value = 0;

module.exports = {
    set: outerValue => value = outerValue,
    sum: outerValue => value += outerValue,
    sub: outerValue => value -= outerValue,
    mult: outerValue => value *= outerValue,
    div: outerValue => value /= outerValue,
};