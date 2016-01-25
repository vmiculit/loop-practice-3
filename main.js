// Write a loop that prints the given output

// Ex:

console.log("<----EX:")

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

for(var i=0; i<students.length; i++) {
 console.log(students[i].name);
}

// 1. 
// 25
// 27
// 32
// 24
// 18

console.log("<----1:")

for (var i = 0; i < students.length; i++) {
	console.log(students[i].age)
}

// 2.
// Liz, Boulder
// Meghan, Denver
// Trent, Boulder
// Chelsea, Boulder
// Amir, Denver

console.log("<----2:")

for (var i = 0; i < students.length; i++) {
	console.log(students[i].name + ", " + students[i].city)
}

// 3.
// Liz is from Boulder
// Trent is from Boulder
// Chelsea is from Boulder

console.log("<----3:")

for (var i = 0; i < students.length; i++) {
	if (students[i].city === "Boulder") {
	console.log(students[i].name + " is from " + students[i].city)
	}
}

// 4.
// Meghan is older than 25
// Trent is older than 25

console.log("<----4:")

for (var i = 0; i < students.length; i++) {
	if (students[i].age > 25) {
	console.log(students[i].name + " is older than 25")
	}
}
