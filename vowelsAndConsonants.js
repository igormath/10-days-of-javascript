function vowelsAndConsonants(s) {
    let arrayConsoantes = [], arrayVogais = [];

    for (let i = 0; i < s.length; i++) {
        if (isVogal(s.charAt(i))) {
            arrayVogais.push(s.charAt(i));
        } else {
            arrayConsoantes.push(s.charAt(i));
        };
    }

    arrayVogais.forEach((valor) => {
        console.log(valor);
    })

    arrayConsoantes.forEach((valor) => {
        console.log(valor);
    })

}

function isVogal(letra) {
    let result = false;
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    vogais.forEach((valor) => {
        if (letra === valor) {
            result = true;
        }
    })
    return result;
}
