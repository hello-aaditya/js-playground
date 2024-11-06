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


