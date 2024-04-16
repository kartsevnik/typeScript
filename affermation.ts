const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value
//==========================================================================
const getLength1 = (text: string | null) => {
    return text?.length
}
getLength1("sdfsdf")
getLength1(null)

// Оператор ?. используется для проверки, является ли значение переменной text null или undefined. 
// Если text равен null или undefined, оператор вернет undefined.
// В противном случае, если text является строкой, оператор вернет длину этой строки.

// Таким образом, если text равен null или undefined, функция getLength вернет undefined.
//  Если text является строкой, она вернет длину этой строки.
//  Это позволяет избежать ошибок времени выполнения, связанных с попыткой получить доступ к свойству или методу объекта, который может быть null или undefined.
//==========================================================================
const getLength2 = (text: string | null):number => {
    return text!.length
}
getLength2("sdfsdf")
getLength2(null)
// Относительно функции getLength, она принимает аргумент типа string | null, что означает, что функция принимает строку или null.
//     Однако, функция вызывает text!.length, используя оператор!, который утверждает, что переменная text не равна null.
//     Это может вызвать ошибку времени выполнения, если text действительно равен null.
//     Хотя такой подход допустим, его следует использовать осторожно.