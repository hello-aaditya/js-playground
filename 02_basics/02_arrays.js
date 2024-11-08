const teamInd = ["SKY", "R Singh", "Samson", "A Patel", "Pandya", "Bishnoi"]
const teamAus = ["Short", "Jake", "s Smith", "Maxwell", "Pat", "Hazelwood"]

//array in array
//teamInd.push(teamAus)
//console.log(teamInd);


//const teams = teamInd.concat(teamAus)
//console.log(`players list: ${teams}`);

//const players = [...teamInd, ...teamAus]
//console.log(players);

const realArr = [1, 2, 3, [4, 5, 6], 7, [14, 15, 16], 38]
const realAnotherArr = realArr.flat(Infinity)
console.log(realAnotherArr);


//check is the given things an array?
console.log(Array.isArray("Ramaswami"))
//convert any datatype into array
console.log(Array.from("Ramaswami"));

const run1 = 85
const run2 = 97
const run3 = 110
console.log(Array.of(run1, run2, run3))
