"use strict";
//Lesson 2: Data Types
let myName;
let meaningOfLife;
let isLoading;
let album;
let track;
myName = "Chris";
meaningOfLife = 42;
isLoading = true;
album = 1984;
track = "Eruption";
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
//Lesson 3: Arrays, Tuples, Objects, and Enums
let stringArr = ["one", "hey", "Chris"];
let games = ["Final Fantasy", "Dark Souls", 2077];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "two";
stringArr.push("three");
games[0] = 1985, "Baldurs Gate";
games.unshift("DRG");
games = stringArr;
mixedData = games, stringArr;
//This will infer the any data type
let test = [];
//This implies an empty string array
let bands = [];
bands.push("Tool", "Mastodon");
//Tuple
let myTuple = ["Chris", 28, true];
let mixed = ["Chris", 1, false];
mixed = myTuple;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Chris",
    prop2: true,
};
exampleObj.prop2 = false;
let tool = {
    name: "Danny Carey",
    active: true,
    albums: ["Lateralus", 10000, "Fear Innoculum"]
};
let theWho = {
    name: "Keith Moon",
    albums: ["Tommy", "Who's Next", "My Generation"]
};
const greetDrummer = (drummer) => {
    //Narrowing
    if (drummer.name) {
        return `Hello, ${drummer.name.toUpperCase()}!`;
    }
    return "Hello, whoever you are!";
};
console.log(greetDrummer(theWho));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
//Lesson 4: Functions
