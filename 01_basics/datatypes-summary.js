/* 
Primitive =>
    7 types: 
        1. String
        2. Number
        3. Boolean
        4. null
        5. undefined
        6. Symbol
        7. BigInt

Reference (Non Primitive) =>
    3 types:
        1. Array
        2. Objects
        3. Functions
*/

//Primitive
const score = 100
const playerName = "virender sehwag"
const runRate = 134.22

const hasRanOut = false
const carrierStat = null
let playerEmail //undefined

const indianPlayerId = Symbol('55')
const pakistanPlayerId = Symbol('55')
console.log(indianPlayerId === pakistanPlayerId);

const bigNumber = 64564545128567123248n
console.log(typeof(bigNumber))

console.log("******************************************************");
//Non Primitive

const singer = ["Post Malone", "Sam Smith", "Ludacris", "Akon"] //Array

let myObj = {
    name : "Post Malone",
    age : 29,
    Nationality : "American",
} //Object

const myFunction = function()
{
    console.log("Mourning");
} // Function


console.log(typeof(myObj));
console.log(singer);
console.log(typeof(singer));
console.log(typeof(myFunction))


console.log("***********************************")

/* 
stack => (Primitive), Heap => (Non-Primitive)
*/

let myCollege = "CMU"

let anotherCollege = myCollege

console.log(myCollege)
console.log(anotherCollege);

anotherCollege = "Stanford"
console.log(myCollege);
console.log(anotherCollege);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ramaswami@google.com"

console.log(userOne);
console.log(userTwo);

