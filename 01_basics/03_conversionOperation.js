let score = 33

console.log(typeof(score)) //number

let moneyinString = "330p"
let moneyinNumber = Number(moneyinString)

console.log(typeof(moneyinString)) //string
console.log(typeof(moneyinNumber)) //number?
console.log(moneyinNumber) //NaN (Not a Number)

/*
"33" =>33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "tukaram"
let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);

/* 
1 => true; 0 => flase
"" => false; "anything" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber));
console.log(stringNumber);

// ***********************OPERATIONS******************************
console.log("*******************************************************************");

let value = 3

let negValue = -value
console.log(negValue);

console.log("Addition: " + (2+2))
console.log("Subtraction: " + (2-2))
console.log("Multiplication: " + (2*2))
console.log("Power: " + (2**4))
console.log("Division: " + (2/2))
console.log("Remainder: " + (2%2))

console.log("*******************************************************************");
let str1 = "3"
let str2 = "5"
let str3 = str1 + str2
console.log(str3); //=> concatenation
console.log("*******************************************************************");

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + "2" + 3)
console.log(7 + 2 + "3")
console.log("*******************************************************************");

console.log(true + 2)
console.log(2 + true)

console.log(true + 2 + 7)
console.log(2 + true + 7)
console.log(2 + 7 + true)
console.log("*******************************************************************");

console.log("21" + true)
console.log(true + "21")