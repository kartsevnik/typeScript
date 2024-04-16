
export interface interfaceUser {
    name: string
    age: number
    address: interfaceAddress
}

export interface interfaceAddress {
    region: string
    city: string
    postalCode: number
}


let user: interfaceUser = {
    name: "Mykola",
    age: 35,
    address: {
        region: "string",
        city: "number",
        postalCode: 25020
    }
}

console.log(user);

