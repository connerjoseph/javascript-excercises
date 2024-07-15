
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    
        // what to do when click detected.
    });

}








// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i<numberOfDrumButtons; i++) {

    // document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked!");
    
        // what to do when click detected.
    //});

//}



// pass in a function as an input to another function


function calculator(num1, num2) {
    return num1 + num2;
}

calculator(4,5);
9



function calculator(num1, num2) {
    return num1 * num2;
}


calculator(10, 3);
30


// input function into another function.

function  add(num1, num2) {
    return num1 + num2;
}
function  multiply(num1, num2) {
    return num1 * num2;
}

function  subtract(num1, num2) {
    return num1 - num2;
}

function  divide(num1, num2) {
    return num1 / num2;
}
function calculator(num1, num2,operator) {
    return operator(num1, num2);
}

//
calculator(4,5, add);
9
calculator(4,5, multiply);
20

// debugger

debugger;
calculator(3,4, multiply);

// for confusion when you don't know what function is doing