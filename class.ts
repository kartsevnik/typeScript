// -Создайте класс TypeScript под названием 'Rectangle' со свойствами длины и ширины.
// -Создайте конструктор (или переменные) для их инициализации
// -Создайте функцию для вычисления площади прямоугольника.(Основание * Высота!)
// -Crea una classe TypeScript chiamata 'Rettangolo' con proprietà per la lunghezza e la larghezza
// -Crea un costruttore (o delle variabili) per inizializzarle 
// -Crea una funzione per calcolare l'area del rettangolo.(Base * Altezza!)
class Rectangle {
    lunghezza: number
    larghezza: number

    constructor(lunghezza: number, larghezza: number) {
        this.larghezza = larghezza
        this.lunghezza = lunghezza
    }

    calcArea(): number {
        return this.lunghezza * this.larghezza
    }
}

let rectangle = new Rectangle(100, 100)
let areaOfRectangle = rectangle.calcArea()
// console.log(areaOfRectangle);

//==========================================================
class Car {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    getInfo(): string {
        return `${this.name} - ${this.price}`
    }
}

class Bus extends Car {
    passengers: number
    constructor(name: string, price: number, passengers: number) {
        super(name, price)
        this.passengers = passengers
    }

    getInfoBus() {
        return this.getInfo() + `${this.passengers}`
    }
}

let car = new Car("Volvo", 10000)
console.log(car.getInfo());

let bus = new Bus("Icarus", 11111, 42)
console.log(bus.getInfoBus());
