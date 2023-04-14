var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David";// declarar / asignar
lastName = "Ana";// reasignar
console.log(lastName);

var secondName = "David"; // declarar /asignar
var secondName = "Ana"; //redeclarar
console.log(secondName)

// Let
let fruit = "Apple"; // declarar / asignar
fruit = "Kiwi"; // reasignar (con let no se puede redeclarar)

//const
const animal = "Dog"; // declarar / asignar
animal = "Cat";// la variable const no se puede reasignar 

const vehicles = []; // se pueden agregar valores a una variable usando metodos de su valor
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
