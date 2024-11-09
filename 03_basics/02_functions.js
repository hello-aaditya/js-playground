//when you know the user has to add only one thing (certain thing) in the his cart so you can add that no. of parameter in the function definition
function showCartPrice(val1, val2)
{
    return val1+val2
}

console.log(showCartPrice(99, 149));

//when user add unpredictable no. of items in their cart
function showCartPrice1(...val)
{
    return val
}

console.log(showCartPrice1(199, 49, 149));

//pass an object in function
const user = {
    username: "ramaswami",
    price: 99
}

function handleObject(anyObject)
{
    console.log(`Username is ${user["username"]} and price is ${user["price"]}`);
}
handleObject(user)

