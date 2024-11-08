//Dstes

let myDate = new Date()
console.log(myDate); //can't understandable
console.log(myDate.toString()); //understandable
console.log(myDate.toDateString()); //understandable => w/o time
console.log(myDate.toISOString());
console.log(myDate.toLocaleString()); //a lil'l bit more understandable
console.log(typeof(myDate))

//manual created date
let myCreatedDate = new Date(2023, 0, 15)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 15, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("11-12-2023")
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate2.toString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

const theDate = new Date()
const todayDate = theDate.getDate();
const todayMonth = theDate.getMonth();
const todayYear = theDate.getFullYear();
const finalDate = `Date: ${todayDate}-${todayMonth}-${todayYear}`
console.log(finalDate)