type TypeChannelReturn = {
    name: string
}

function getChannel(name: string): TypeChannelReturn {
    return { name };
}
//==============================================
type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelName: TypeChannelFunction = name => {
    return { name };
}
//==============================================
let test1 = getChannel("Myko")
let test2 = getChannelName("Myko")

console.log(test1);
console.log(test2);

//==============================================

const getNumbers = (...numbers: number[]) => {
    return numbers
}
let testNumbers = getNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log("testNumbers: ")
console.log(testNumbers)

