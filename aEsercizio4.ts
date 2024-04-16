// String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/typescript

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Допишите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается на 2-й аргумент (тоже строка).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution1(strOne: string, strTwo: string): boolean {
    if (strOne.length >= strTwo.length) {
        let start = strOne.length - strTwo.length
        for (let index = 0; index < strTwo.length; index++) {
            if (strOne[start + index] !== strTwo[index]) {
                return false
            }
        }
        return true
    }
    return false
}

console.log(solution1('abc', 'bc'));  // true
console.log(solution1('abc', 'd'));   // false

function solution2(strOne: string, strTwo: string): boolean {
    return strOne.endsWith(strTwo);
}

console.log(solution2('abc', 'bc'));  // true
console.log(solution2('abc', 'd'));   // false
