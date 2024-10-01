let valueArea = document.getElementById("valueArea");
let operators = document.querySelectorAll(".btn_r");
let numbers = document.querySelectorAll(".btn");
let calc = document.querySelector("#calc");
let deleteBtn = document.querySelector("#deleteBtn");

let firstValue = 0;
let secondValue = 0;
let isSecondValue = false;
let oprt;

valueArea.textContent = firstValue;

let handleNumberClick = (e) => {
    let value = e.target.textContent;
    if (isSecondValue == false) {
        firstValue = firstValue + value;

        valueArea.textContent = firstValue.substring(1);
    } else {
        secondValue = secondValue + value;

        valueArea.textContent = secondValue.substring(1);
    }

}
let handleOperatorClick = (e) => {
    valueArea.textContent = secondValue;

    oprt = e.target.textContent;
    isSecondValue = true;
}

let calculateResult = () => {
    if (firstValue != 0 && secondValue != 0) {
        if (oprt == "+") {
            let total = parseFloat(firstValue.substring(1)) + parseFloat(secondValue.substring(1));
            valueArea.textContent = total;
            firstValue = "0" + total;
            console.log(`Total: ${total}`);
        }
        else if (oprt == "-") {
            let total = parseFloat(firstValue.substring(1)) - parseFloat(secondValue.substring(1));
            valueArea.textContent = total;
            firstValue = "0" + total;
            console.log(`Total: ${total}`);
        }
        else if (oprt == "*") {
            let total = parseFloat(firstValue.substring(1)) * parseFloat(secondValue.substring(1));
            valueArea.textContent = total;
            firstValue = "0" + total;
            console.log(`Total: ${total}`);
        }
        else if (oprt == "/") {
            let total = parseFloat(firstValue.substring(1)) / parseFloat(secondValue.substring(1));
            valueArea.textContent = total;
            firstValue = "0" + total;
            console.log(`Total: ${total}`);
        }
    }
    secondValue = 0;
}

let resetCalculator  = () => {
    firstValue = 0;
    secondValue = 0;
    oprt = null;
    isSecondValue = false;

    valueArea.textContent = firstValue;
}

calc.addEventListener("click", calculateResult);

deleteBtn.addEventListener("click", resetCalculator )

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", handleOperatorClick);
}


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", handleNumberClick);
}

