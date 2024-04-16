
type TypeUser2 = {
    name: string
    age: number
}

type TypeAddress2 = {
    region: string
    city: string
    postalCode: number
}


const user2: TypeUser2 = {
    name: "Mykola",
    age: 35,
}

const address2: TypeAddress2 = {
    region: "string",
    city: "number",
    postalCode: 25020
}

let common: TypeUser2 & TypeAddress2

common = {
    ...user2,
    ...address2
}

console.log(common);

