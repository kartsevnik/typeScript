interface iCar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

// Omit
// Эта запись говорит что создается объект iCar без указания параметра "id"
interface iCarCreate extends Omit<iCar, "id"> { }
const carOmit: iCarCreate = {
    name: "car",
    price: 2000,
    yearBuilt: 2023
}
console.log("Omit");
console.log(carOmit);

//Pick
// Эта запись говорит что создается объект iCar только с указанием параметра "id"
interface iCarId extends Pick<iCar, "id"> { }
const carPick: iCarId = {
    id: 1
}
console.log("Pick");
console.log(carPick);

//Partial
// Эта запись говорит что создается объект iCar все параметры не обязательны
interface iCarOptional extends Partial<iCar> { }
const carOptional: iCarOptional = {
    id: 0,
    yearBuilt: 2023
}
console.log("Partial");
console.log(carOptional);

//Requird
// Эта запись говорит что создается объект iCar все параметры обязательными (если в конструкторе указано обратное, что они не обязательный)
interface iCarRequired extends Required<iCar> { }
const carRequired: iCarRequired = {
    id: 5,
    name: "car",
    price: 2000,
    yearBuilt: 2023
}
console.log("Requird");
console.log(carRequired);

//ReadOnly
// Эта запись говорит что создается объект iCar все параметры только для чтения
interface iCarReadOnly extends Readonly<iCar> { }
const carReadOnly: iCarReadOnly = {
    id: 2,
    name: "car3",
    price: 3333,
    yearBuilt: 2020
}
console.log("ReadOnly");
console.log(carReadOnly);

//Record
// Эта запись говорит что создается объект iCar все параметры 'name' | 'price' will be string | number
type TypeCarRecord = Record<'name' | 'price', string | number>
const carRecord: TypeCarRecord = {
    name: "car3",
    price: 3333,
}
console.log("Record");
console.log(carRecord);

// ReturnType
// Когда незнаешь какой тип данных возвращается
type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

// Возвращает тип данных который повторяется
type Any = Extract<"max" | "min", "min" | "middle">

// Возвращает тип данных NotNull
type NotNull = NonNullable<string | number | null | undefined>
