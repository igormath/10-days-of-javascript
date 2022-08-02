function getMaxLessThanK(n, k) {
    let arrayBitwise = [], resposta = -Infinity;

    for (let i = 1; i < n; i++) {
        for (let k = 2; k <= n; k++) {
            if ((k !== i) && (k > i)) {
                arrayBitwise.push(i & k);
            }
        }
    }

    arrayBitwise.forEach((value) => {
        if ((value < k) && (value > resposta)) {
            resposta = value;
        }
    })

    return resposta;
}
