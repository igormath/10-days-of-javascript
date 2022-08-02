function Rectangle(a, b) {
    class Retangulo {
        constructor(comprimento, largura) {
            this.lengthMeasure = comprimento;
            this.widthMeasure = largura;
            this.perimetro = 2 * (this.lengthMeasure + this.widthMeasure);
            this.area = this.lengthMeasure * this.widthMeasure;
        }
    }

    meuRetangulo = new Retangulo(a, b);
    return meuRetangulo
}
