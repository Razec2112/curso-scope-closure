function greeting(){
    let username = "Oscar";

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //aqui me devuelve la definicion de la funcion
console.log(g()); // aqui me devuelve el valor que da la funcion