// WHile loops

while (something is true) {
    // Do something
}

var i = 1 ;

while(i<2) {
    console.log(i);
    i++;
}

// Loop runs function 100 times


var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {

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
    }


    console.log(output);
}