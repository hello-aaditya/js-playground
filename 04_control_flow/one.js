//if
/* const isUserLoggedIn = true
const temperature = 41

if(temperature === 41)
{
    console.log("Less than 50")
}
else
{
    console.log("Temperature is greater than 50");
}
console.log("Executed"); */


// <, >, <=, >=, ==, !=, ===, !==

/* const score = 200
if(score>100)
{
    const power = "fly"
    console.log((`User power: ${power}`));   
} 
// console.log((`User power: ${power}`));
*/

/* 
NOT RECOMMENDED
const balance  = 20000
if(balance > 500) console.log("test"),
console.log("test2");

 */

/* 
const balance  = 10000
if(balance < 500)
{
    console.log("Less than");
}
else if(balance < 750)
{
    console.console.log("Less than 750");
}
else if(balance < 900)
    {
        console.console.log("Less than 900");
    }
else
{
    console.log("Less than 1200");
} 
    */


const userLoogedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if(userLoogedIn && debitCard && 2==2)
{
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User is Logged in");
}