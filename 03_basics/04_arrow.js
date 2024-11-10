const user = 
{
    username: "Ramaswami",
    email: "ramaswami13@gmail.com",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user["username"] = "Pillai"
// user.welcomeMessage()

// console.log(this);
//arraow function
const addTwo = (num1, num2) =>
{
    return num1+num2;
}
console.log(addTwo(3, 5));

//implicit return
const addThree = (num1, num2, num3) => num1+num2+num3
//or
// const addThree = (num1, num2, num3) => (num1+num2+num3)

console.log(addThree(2, 3, 5))

//implicit return when working on object
const myName = () => ({username: "Ramaswami"})
console.log(myName())