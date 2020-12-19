function calculateDelta(a, b, c) {
    return b*b - 4*a*c;
}

function calculateRoot1(a, b, delta) {
    return (-b + Math.sqrt(delta))/(2*a);
}

function calculateRoot2(a, b, delta) {
    return (-b - Math.sqrt(delta))/(2*a);
}

function calculateBhaskara(a, b, c) {
    const delta = calculateDelta(a, b, c);

    if (delta > 0) {
        const root1 = calculateRoot1(a, b, delta);
        const root2 = calculateRoot2(a, b, delta);
        return [ root1, root2 ];
    }
    else {
        if (delta == 0) {
            const root1 = calculateRoot1(a, b, delta);
            return [ root1 ];
        }
        else
            return [];
    }
}

module.exports = {
    calculateDelta,
    calculateRoot1,
    calculateRoot2,
    calculateBhaskara
}