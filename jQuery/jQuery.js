// SELECTING ELEMENTS

document.querySelector("h1");
// jQuery
$("h1");

document.querySelectorAll("button");
// jQuery
$("button");


// MANIPULATING STYLES

$("h1").css("color");
console.log($("h1").css("color"));

console.log($("h1").css("font-size"));


// single property you are getting the value, if you have have two your setting the value

$("h1").css("font-size", "5rem");