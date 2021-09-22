
// Increasing and decreasing quantity

function increaseInput() {
    var number = document.getElementById("inputNumber");
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number!=0) {
        number++;
        document.getElementById("inputNumber").value = number;
    }
}

function decreaseInput() {
    var number = document.getElementById("inputNumber");
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number > 1) {
        number--;
        document.getElementById("inputNumber").value = number;
    }
}