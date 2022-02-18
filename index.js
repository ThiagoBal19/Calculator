function plus() {
    let total = document.getElementById("result")
    let number1 = parseInt(document.getElementById("numberOne").value)
    let number2 = parseInt(document.getElementById("numberTwo").value)
    let symbol = document.getElementById("simbolo")
    if (isNaN(number1, number2)) {
        total.innerHTML = 0;
    } else {
        total.innerHTML = number1 + number2;
        symbol.innerHTML = "+";
    }
}
function subtract() {
    let total = document.getElementById("result")
    let number1 = parseInt(document.getElementById("numberOne").value)
    let number2 = parseInt(document.getElementById("numberTwo").value)
    let symbol = document.getElementById("simbolo")
    if (isNaN(number1, number2)) {
        total.innerHTML = 0;
    } else {
        total.innerHTML = number1 - number2;
        symbol.innerHTML = "-";
    }
}
function multiply() {
    let total = document.getElementById("result")
    let number1 = parseInt(document.getElementById("numberOne").value)
    let number2 = parseInt(document.getElementById("numberTwo").value)
    let symbol = document.getElementById("simbolo")
    if (isNaN(number1, number2)) {
        total.innerHTML = 0;
    } else {
        total.innerHTML = number1 * number2;
        symbol.innerHTML = "x";
    }
}
function divide() {
    let total = document.getElementById("result")
    let number1 = parseInt(document.getElementById("numberOne").value)
    let number2 = parseInt(document.getElementById("numberTwo").value)
    let symbol = document.getElementById("simbolo")
    if (isNaN(number1, number2)) {
        total.innerHTML = 0;
    } else {
        total.innerHTML = number1 / number2;
        symbol.innerHTML = "/";
    }
}