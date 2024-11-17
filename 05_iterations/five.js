const coding = ["js", "ruby", "java", "python", "sql", "cpp"]
/* 
coding.forEach( function (val) {
    console.log(val); 
} )
 */
//print via arrow function
coding.forEach( (val) => {
    console.log(val)
} )

//-------------------------------------
//print array using forEach but using a function
/* 
function printMe(item)
{
    console.log(item)
}

coding.forEach(printMe)
 */