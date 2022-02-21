let number1;
let number2;
let resultado2;
let resultado = document.getElementById("screen")
let suma = document.getElementById("sumar")
let resta = document.getElementById("restar")
let multiplicacion = document.getElementById("multiplicar")
let division = document.getElementById("dividir")
let Igual = document.getElementById("igual")
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let comaNumero = document.getElementById(".")


// NÚMEROS
one.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 1;
}
two.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 2;
}
three.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 3;
}
four.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 4;
}
five.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 5;
}
six.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 6;
}
seven.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 7;
}
eight.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 8;
}
nine.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 9;
}
zero.onclick = function() {
    resultado.innerHTML = resultado.innerHTML + 0;
}

// SÍMBOLOS
// suma
suma.onclick = function() {
    number1 = resultado.innerHTML
    resultado2 = "+";
    clean()
}
// resta
resta.onclick = function() {
    number1 = resultado.innerHTML
    resultado2 = "-";
    clean()
}
// multiplicación
multiplicacion.onclick = function() {
    number1 = resultado.innerHTML
    resultado2 = "*";
    clean()
}
// división
division.onclick = function() {
    number1 = resultado.innerHTML
    resultado2 = "/";
    clean()
}


// FUNCIONES
// limpiar
function clean() {
    resultado.innerHTML = "";
}

// total
Igual.onclick = function() {
    number2 = resultado.innerHTML;
    resultado;
    switch(resultado2) {
        case "+":
            resultado.innerHTML = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            resultado.innerHTML = number1 - number2;
            break;
        case "*":
            resultado.innerHTML = number1 * number2;
            break;
        case "/":
            resultado.innerHTML = number1 / number2;
            break;
        default:
            resultado.innerHTML = "";
            break;
    }
}