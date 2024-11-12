const userEmail = "ramaswami13@google.com"

if(userEmail)
{
    console.log("Got user email")
}
else
{
    console.log("Don't have user email")
}

/* 
falsy value:
=> false, 0, -0, "", BigInt, 0n, null, undefined, NaN

truthy value:
=> true, 1, "0", "false", " ", "kuchBhi", [], {}, function(){}
*/


const secondUserEmail = []
if(secondUserEmail.length === 0)
{
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty")
}
/* 
//Nullish Coalecing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 10 ?? undefined

val1 = null ?? 5 ?? 10
console.log(val1)
 */

// condition ? true : false

const coffeePrice = 25
console.log((coffeePrice >= 50) ? "forget it" : "buy it")
