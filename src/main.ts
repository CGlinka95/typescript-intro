//Lesson 2: Data Types
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let track: string | number;

myName = "Chris"
meaningOfLife = 42
isLoading = true
album = 1984
track = "Eruption"

const sum = (a: number, b: number) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g

//Lesson 3: Arrays, Tuples, Objects, and Enums
let stringArr = ["one", "hey", "Chris"]

let games = ["Final Fantasy", "Dark Souls", 2077]

let mixedData = ["EVH", 1984, true]

stringArr[0] = "two"
stringArr.push("three")

games[0] = 1985, "Baldurs Gate"
games.unshift("DRG")

games = stringArr
mixedData = games, stringArr

//This will infer the any data type
let test = []

//This implies an empty string array
let bands: string[] = []
bands.push("Tool", "Mastodon")

//Tuple
let myTuple: [string, number, boolean] = ["Chris", 28, true]

let mixed = ["Chris", 1, false]

mixed = myTuple

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Chris",
    prop2: true,
}

exampleObj.prop2 = false

interface Drummer {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let tool: Drummer = {
    name: "Danny Carey",
    active: true,
    albums: ["Lateralus", 10000, "Fear Innoculum"]
}

let theWho: Drummer = {
    name: "Keith Moon",
    albums: ["Tommy", "Who's Next", "My Generation"]
}

const greetDrummer = (drummer: Drummer) => {
    //Narrowing
    if (drummer.name) {
        return `Hello, ${drummer.name.toUpperCase()}!`
    }
    return "Hello, whoever you are!"
}

console.log(greetDrummer(theWho))

//Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)

//Lesson 4: Functions

