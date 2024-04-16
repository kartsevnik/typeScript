//Even or Odd
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even" для четных чисел или "Odd" для нечетных.

function evenOrOdd(num: number): string {
    return num % 2 ? "Odd" : "Even"
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
