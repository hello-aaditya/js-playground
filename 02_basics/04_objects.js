//singleton or creating objects using constructor
//way-1:


//const tinderUser = new Object()
const tinderUser = {} 


//way-2:

console.log(tinderUser)

tinderUser.id = "ramaswami-123"
tinderUser.name = "Ramaswami"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));




//nested object
/* const regularUser = {
    email: "ramaswami13@google.com",
    fullname: {
        userFirstName: "Ramaswami",
        userLastName: "Pillai"
    }
}

console.log(regularUser["fullname"]["userFirstName"]);
*/

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e"}
const obj3 = {6: "f", 7: "g", 8: "h"}

//const obj4 = Object.assign({}, obj1, obj2, obj3) //way-1
/* 
const obj4 = {...obj1, ...obj2, ...obj3} //spread operator
console.log(obj4);
*/


