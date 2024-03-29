// Fizz Buzz

var output = [];

output.push(1);
//1
output
//[1]

output.push(2);
//2
output
// (2)[1, 2]

egg.push(); //always pushes item to end of array

eggs.pop; // will remove item from array


var output = [];
var count = 1;

function fizzBuzz() {

    output.push(count);
    count++;


    console.log(output);
}

// run function

fizzBuzz();
[1]

fizzBuzz();

(2) [1, 2]

fizzBuzz();

(3) [1, 2, 3]

fizzBuzz();

(4)[1, 2, 3, 4]

fizzBuzz();

(5) [1, 2, 3, 4, 5]


// If else using Fizz Buzz


var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0) {
        output.push("Fizz");
    } 
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    
    else {
        output.push(count);
    }

    count++;


    console.log(output);
}

// goes top down when using funtion so skips numbers that are both Fizz & Buzz need to add &&

var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }

    else if (count % 3 === 0) {
        output.push("Fizz");
    } 
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    
    else {
        output.push(count);
    }

    count++;


    console.log(output);
    
}