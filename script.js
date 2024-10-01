let valueArea = document.getElementById("valueArea");
let operators = document.querySelectorAll(".btn_r");
let numbers = document.querySelectorAll(".btn");
let calc = document.querySelector("#calc");
let deleteBtn = document.querySelector("#deleteBtn");

let val1 = 0;
let val2 = 0;
let stage = false;
let oprt;

valueArea.textContent = val1;

let clickBtn = (e) => {
    let value = e.target.textContent;
    if (stage == false) {
        val1 = val1 + value;

        valueArea.textContent = val1.substring(1);
    } else {
        val2 = val2 + value;

        valueArea.textContent = val2.substring(1);
    }

}
let clickOprt = (e) => {
    valueArea.textContent = val2;

    oprt = e.target.textContent;
    stage = true;
}

let calcnum = () => {
    if(val1 != 0 && val2 != 0){
        if (oprt == "+") {
            let total = parseFloat(val1.substring(1)) + parseFloat(val2.substring(1));
            valueArea.textContent = total;
            val1 ="0" + total;
        }
        else if (oprt == "-") {
            let total = parseFloat(val1.substring(1)) - parseFloat(val2.substring(1));
            valueArea.textContent = total;
            val1 ="0" + total;
        }
        else if (oprt == "*") {
            let total = parseFloat(val1.substring(1)) * parseFloat(val2.substring(1));
            valueArea.textContent = total;
            val1 ="0" + total;
        }
        else if (oprt == "/") {
            let total = parseFloat(val1.substring(1)) / parseFloat(val2.substring(1));
            valueArea.textContent = total;
            val1 ="0" + total;
        }
    }else{
        
    }
    val2 = 0;
}

let deleteFunc = () => {
    val1 = 0;
    val2 = 0;
    oprt = null;
    stage = false;

    valueArea.textContent = val1;
}

calc.addEventListener("click", calcnum);

deleteBtn.addEventListener("click", deleteFunc)

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", clickOprt);
}


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", clickBtn);
}

