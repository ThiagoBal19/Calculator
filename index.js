let number1;
let number2;
let result2;
let result = document.getElementById("screen")
let plus = document.getElementById("plus")
let subtract = document.getElementById("subtract")
let multiplication = document.getElementById("multiplication")
let divide = document.getElementById("divide")
let Equal  = document.getElementById("equal")
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


// NÚMEROS
one.onclick = function() {
    result.innerHTML = result.innerHTML + 1;
}
two.onclick = function() {
    result.innerHTML = result.innerHTML + 2;
}
three.onclick = function() {
    result.innerHTML = result.innerHTML + 3;
}
four.onclick = function() {
    result.innerHTML = result.innerHTML + 4;
}
five.onclick = function() {
    result.innerHTML = result.innerHTML + 5;
}
six.onclick = function() {
    result.innerHTML = result.innerHTML + 6;
}
seven.onclick = function() {
    result.innerHTML = result.innerHTML + 7;
}
eight.onclick = function() {
    result.innerHTML = result.innerHTML + 8;
}
nine.onclick = function() {
    result.innerHTML = result.innerHTML + 9;
}
zero.onclick = function() {
    result.innerHTML = result.innerHTML + 0;
}

// SÍMBOLOS
// suma
plus.onclick = function() {
    number1 = result.innerHTML
    result2 = "+";
    clean()
}
// resta
subtract.onclick = function() {
    number1 = result.innerHTML
    result2 = "-";
    clean()
}
// multiplicación
multiplication.onclick = function() {
    number1 = result.innerHTML
    result2 = "*";
    clean()
}
// división
divide.onclick = function() {
    number1 = result.innerHTML
    result2 = "/";
    clean()
}


// FUNCIONES
// limpiar
function clean() {
    result.innerHTML = "";
}

// total
Equal.onclick = function() {
    number2 = result.innerHTML;
    result;
    switch(result2) {
        case "+":
            result.innerHTML = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            result.innerHTML = number1 - number2;
            break;
        case "*":
            result.innerHTML = number1 * number2;
            break;
        case "/":
            result.innerHTML = number1 / number2;
            break;
        default:
            result.innerHTML = "";
            break;
    }
}