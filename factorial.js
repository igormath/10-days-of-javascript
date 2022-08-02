function factorial(n) {
    let arrayDecrescente = [];
    for (let i = n; i > 0; i--) {
        arrayDecrescente.push(i);
    };

    let result = arrayDecrescente[0];
    for (let i = 1; i < (arrayDecrescente.length - 1); i++) {
        result = result * arrayDecrescente[i];
    }

    return result;
};
