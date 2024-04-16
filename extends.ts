// Делаем extends на тип данных и возвращаем результат
type TypeIsNumber<T> = T extends number ? "Yes" : "No"

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>
//==============================================================
// Скрещивает два типа данных, нельзя указать ничего отличного от перечисленного
type TypeBrand = 'bmw' | 'ferrari' | 'mers'
type TypePrice = '$10000' | '$20000' | '$40000'
type TypeCar = `${TypeBrand} ${TypePrice}`
 
const carType: TypeCar = 'ferrari $40000'