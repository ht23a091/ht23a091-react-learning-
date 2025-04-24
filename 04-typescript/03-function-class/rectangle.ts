class Rectangle {
    readonly name = 'rectangle';
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea = () => this.sideA * this.sideB;
}

const a = new Rectangle(2, 3);
console.log(a.getArea());