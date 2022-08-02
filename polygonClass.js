class Polygon {
    constructor(lengthsArray) {
        this.arrayComprimentos = lengthsArray;
    }
    perimeter() {
        let perimetro = 0;
        this.arrayComprimentos.forEach((value) => {
            perimetro += value;
        })
        return perimetro;
    }
}
