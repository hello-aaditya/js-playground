/* function sayMyName()
{
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("M");
    console.log("I");
}

sayMyName() */

/* 1. Sum of Two Numbers
Write a function named sum that takes two numbers as arguments and returns their sum.
 */
function sum(a, b)
{
    return a+b;
}

console.log(sum(3, 5))

/* Convert Minutes to Seconds
Write a function named convertMinutesToSeconds that takes a number representing minutes and returns the equivalent number of seconds.
 */
function convertMinutesToSeconds(minutes)
{
    return minutes*60;
}
console.log(convertMinutesToSeconds(1));


/* Find the Largest Number in an Array
Write a function named findLargest that takes an array of numbers and returns the largest number in the array.
 */
function findLargest(arr)
{
    return Math.max(...arr)
}
const arr = [12, 6, 45, 3, 44, 0, 77, 81, 69, 11]
console.log(findLargest(arr));


/* Capitalize the First Letter of Each Word
Write a function named capitalizeWords that takes a string and returns the same string with the first letter of each word capitalized.
 */
function capitalizeWords(str)
{
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("the quick brown fox jumps over the lazy dog"))

/* Check for Prime Number
Write a function named isPrime that takes a number as an argument and returns true if the number is prime, and false otherwise. */
function isPrime(num)
{
    for(let i=2; i<=num/2; i++)
    {
        if(num%i == 0)
        {
            return false
        }
    }
    return true
}
console.log(isPrime(9))
