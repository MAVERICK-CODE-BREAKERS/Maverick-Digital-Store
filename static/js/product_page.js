// function increaseCount(a, b) {
//     var input = b.previousElementSibling;
//     var value = parseInt(input.value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     input.value = value;
// }
//increaseCount()
  
// function decreaseCount(a, b) {
//     var input = b.nextElementSibling;
//     var value = parseInt(input.value, 10);
//     if (value > 1) {
//       value = isNaN(value) ? 0 : value;
//       value--;
//       input.value = value;
//     }
// }
//decreaseCount()

// 

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
        //let minus = document.getElementById("minus");
        number = parseInt(number.value, 10);
        number = isNaN(number) ? 0 : number;
        if(number > 1) {
            number--;
            document.getElementById("inputNumber").value = number;
        }
    }

// function increaseInput()
// {
//     var value = parseInt(document.getElementById("inputNumber").value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value!=0){
//         value++;
//             document.getElementById("inputNumber").value = value;
//     }
// }
// function decreaseInput()
// {
//     var value = parseInt(document.getElementById("inputNumber").value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value>1){
//         value--;
//             document.getElementById("inputNumber").value = value;
//     }

// }
