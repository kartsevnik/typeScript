interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

const iUser1: IUser = {
    name: "Myko",
    email: "myko@123.ua",
    age: 23
}

//===========================================
// Аналогичная запись через type

type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

const iUser2: TypeUser = {
    name: "Myko",
    email: "myko@123.ua",
    age: 23
}

//===========================================

const users: IUser[] = [
    iUser1,
    iUser2,
    {
        name: "Fede",
        email: "fede@123.ua",
        age: 43
    }
]

console.log(users);
