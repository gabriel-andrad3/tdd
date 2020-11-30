function calculateDelta(a, b, c) {
    return b*b - 4*a*c;
}

function calculateRoot1(a, b, delta) {
    return (-b + Math.sqrt(delta))/(2*a);
}

function calculateRoot2(a, b, delta) {
    return (-b - Math.sqrt(delta))/(2*a);
}

module.exports = {
    calculateDelta,
    calculateRoot1,
    calculateRoot2
}