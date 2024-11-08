const mySym = Symbol()

const JSUser = {
    name: "Ramaswami",
    "full name": "Ramaswami Pillai",
    email: "ramaswami13@google.in",
    age: 23,
    location: "Chennai",
    isLoggenIn: false,
    lastLogInDays: ["Monday", "Saturday"],
    [mySym]: "myKey1" //in object symbol is defined using '[]' o/w it acts as a string
}

console.log(JSUser);

console.log(JSUser["email"])
console.log(JSUser["full name"]);
console.log(JSUser[mySym]);


//object value modification:
JSUser.email = "ramaswami13@gmail.com"
console.log(JSUser);

//fix an object so that further can't be modify
//Object.freeze(JSUser)
JSUser.email = "ramaswami13@google.com"
console.log(JSUser);

JSUser.greeting = function() 
{
    console.log("Hello JS User");
}

JSUser.greetingTwo = function() 
{
    console.log(`Hello JS User ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());


