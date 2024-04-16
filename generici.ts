function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>("2")
//================================================
// arrow version

const entity2 = <T>(args: T): T => {
    return args
}
//================================================
// class version

class Channel<T> {
    private name: T
    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}
new Channel<string>("test")
new Channel<number>(3)
//================================================
// interface version

interface IPair<K, V> {
    key: K,
    value: V
}

const pair1: IPair<number, string> = {
    key: 1,
    value: "1"
}

const pair2: IPair<string, number> = {
    key: "2",
    value: 2
}

//================================================
// function version

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}

getNameLength("sdfsdf")
getNameLength([0, 1, 2, 3])
