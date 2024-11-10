/* let a = 123
if(true)
{
    let a = 10
    const b = 20
    // var c = 30
    console.log(`Inner: ${a}`)
}

console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username = "Ramaswami"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
 */

//function syntax- 1:
function addOne(num)
{
    return num+1
}
console.log(addOne(2));

//function syntax- 2:
const answer = function addTwo(num){
    return num+2
}

console.log(answer(3));


/* 
Note :
you can access a function anywhere in the program in any order like, 
first declare the function and then call it or first call the function and then create it.
example-1:
function addOne(num)
{
    return num+1
}
console.log(addOne(2));


example-2:
console.log(addOne(2));
function addOne(num)
{
    return num+1
}
*/

/* 
but see this example:
const answer = function addTwo(num){
    return num+2
}

console.log(answer(3));
in this example you can not call the funtion first and then declare it.
*/