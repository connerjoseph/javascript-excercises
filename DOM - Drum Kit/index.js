
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    
        // what to do when click detected.
    });

}



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