let array1: string[]
array1 = ['1', '2', '3']
// ====================================

let array2: Array<string>
array2 = ['1', '2', '3']
// ====================================

let array3: TypeUser2[]
array3 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Alice", age: 28 }
]
// ====================================
// Tuple
const contact: [string, number] = ["Name LastName", 3378829292]
// ====================================

const numbersReadOnly: ReadonlyArray<number> = [1, 2, 3]

// ====================================

type TypeArray = [number, string, null]
const newArray: TypeArray = [1, "2", null]
