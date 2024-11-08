/*
=> In JS Array is Homogeneous awa Heterogeneous type
=> In JS array copy operations create shallow copies
    -> Shallow Copies: It stores the references of an object to the original memory address.
                     : It reflects changes made in copied object to original object.

*/

const myArr1 = [0, 1, 2, 3, 4, 5] //Homogeneous Type
const myArr2 = [0, 1, 2, 3, 4, 5, true, "Ramaswami"] //Homogeneous Type

console.log(myArr1);
console.log(myArr2);

//print array's elements by it's index
console.log(`At third position: ${myArr1[3]}`);
console.log(`At third position: ${myArr2[7]}`);

//Array methods
const tempArr = [12, 19, 23, 85, 2, 43, 4]
tempArr.push(9)
tempArr.push(55)
console.log(`After pushing some values: ${tempArr}`)
tempArr.pop()
console.log(`After poping a value: ${tempArr}`)


//shift and unshift in Javascript
const testArr = [12, 43, 65, 88, 10, 3, 19]
console.log(`my Array is: ${testArr}`);

testArr.unshift(93)
console.log(`my Array after using 'unshift' is: ${testArr}`);

testArr.shift()
console.log(`my Array after using 'shift' is: ${testArr}`);

//other methods
console.log(testArr.includes(43));

console.log(testArr.indexOf(43));

const newArr = myArr1.join()
console.log(myArr1);

console.log(newArr);
console.log(typeof(newArr));

//slice && splice

const myTempArr = [26, 52, 87, 116, 75, 100, 55, 91]
console.log("A", myTempArr);

const myNewArr = myTempArr.slice(1, 3)
console.log(myNewArr);
console.log("B", myTempArr);


const myNewArr1 = myTempArr.splice(1, 3);
console.log(myNewArr1);
console.log(myTempArr);
