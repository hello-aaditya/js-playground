const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance));
console.log(balance.toFixed(2));

const otherNumber = 123.8926

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //US-standard
console.log(hundreds.toLocaleString('en-IN')); //INDIA-standard


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log("******************MATHS*****************");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(55, 76, 91, 10, 98, 19, 23));
console.log(Math.max(55, 76, 91, 10, 98, 19, 23));

console.log(Math.random()); //get a random number in b/w of 0 & 1

const myNum1 = Math.random()*10 //get a random number in b/w of 0 to 10
console.log(`random number in b/w of 0 to: ${myNum1}`);
const myNum2 = Math.random()*10 + 1 //get a random number in b/w of 1 to 10
console.log(myNum2);

console.log(Math.floor(myNum2))

/*
get a random number b/w x and y (where x and y are positive integer) where x <= y

Formula = Math.floor(Math.random() * (y - x + 1)) + x
*/
const mini = 10
const maxi = 20
console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini);
