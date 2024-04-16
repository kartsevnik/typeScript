// Overload 
function getCar(name: string): string
function getCar(name: string, price: number): string
function getCar(name: string, price?: number): string {
    return price ? `Name ${name}, Price: ${price}` : `Name ${name}`
}

let car1 = getCar("BMW")
let car2 = getCar("Porshe", 10000)
console.log(car1);
console.log(car2);