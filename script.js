function add(x,y) {
   return x + y; 
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
 return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(operator, x, y) {
    let result;
    switch (operator) {
        case "add":
            result =  add(x,y);
            break;
        case "subtract":
            result =  subtract(x,y);
            break;
        case "multiply":
            result = multiply(x,y);
            break;
        case "divide":
            result = divide(x,y);
            break;
    }
    document.querySelector("display").textContent = result;
}

let x = null;
let y = null;
let result = null;