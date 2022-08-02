function getSecondLargest(nums) {
    let maior = -Infinity, segundoMaior = -Infinity, arrayMenores = [];
    nums.forEach((value) => {
        if (value > maior) {
            maior = value;
        };
    });

    nums.forEach((value) => {
        if (value !== maior) {
            arrayMenores.push(value);
        };
    });

    arrayMenores.forEach((value) => {
        if (value > segundoMaior) {
            segundoMaior = value;
        };
    });

    console.log(segundoMaior);

}
