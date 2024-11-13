//for loop
/* 
for(let i=1; i<=10; i++)
{
    if(i == 6)
    {
        console.log("We are at just before the the no. 6");
    }
    console.log(i);
}
 */
/* 
for(let i=1; i<=10; i++)
{
    console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
 */
/* 
let myArray = ["C++", "Java", "Python", "Javascript", "MySQL", "HTML"];
let result = "";
for (let i = 0; i < myArray.length; i++) {
    result += myArray[i] + " ";
} 
console.log(result.trim());
 */
/* 
let myArray = ["C++", "Java", "Python", "Javascript", "MySQL", "HTML"];
console.log(myArray.join(" "));
 */

//break and continue
for(let i=0; i<=37; i++)
{
    if(i % 5 == 0)
    {
        console.log(`${i}, which is a multiple of 5 has skipped`);
        continue;
    }
    if(i == 31)
    {
        console.log(`{i}, means now i am broken`);
        break;
    }
    console.log(`Value of i = ${i}`);
}