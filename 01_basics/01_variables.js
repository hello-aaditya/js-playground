const accountId = 144355
let accountEmail = "kumarramaswamy144@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // will give error

accountEmail = "kumarvivehk55@gmail.com"
accountPassword = 98765
accountCity = "Delhi"

console.log(accountEmail)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use 'var' 
because of issue in block scope & functional scope
*/
