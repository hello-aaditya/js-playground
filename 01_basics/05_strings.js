const name = "Ramaswami"
const averageScore = 80

console.log(`Hello my name is ${name} and my average score in T20 is ${averageScore}`);

const gameName = new String("SpiderMan")

console.log(gameName[0]);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, 3)
console.log(anotherString);

const newStringOne = "     Ramaswami     "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://ramaswami.com/rama%20swami"
console.log(url.replace("%20", "-"));

console.log(url.includes("rama"));


const paragraph = "I think Ruth's dog is cuter than your dog!"
console.log(paragraph.replaceAll("dog", "Monkey"));


const myExpression = "Happy! "
console.log(`I feel ${myExpression.repeat(3)}`)

const str1 = '456'
console.log(str1.padStart(2, '0'))