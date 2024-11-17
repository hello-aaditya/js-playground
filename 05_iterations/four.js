const myObject = 
{
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) 
{
    //console.log(`'${key}' is shortcut for ${myObject[key]}`);
}

//test: will 'forin' loop work in array?

const programming = ["js", "cpp", "py", "java", "swift"]

for (const key in programming) 
{
    //console.log(programming[key]);
}
/* 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) 
{
    console.log(key); //it prints nothing because map is not iteratable
}
 */

