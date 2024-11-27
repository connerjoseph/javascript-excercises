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

// keep javasript about behaviour 
// keep style code about appearance
// keep html all about content

$("h1").addClass("big-title");
// in console to remove
$("h1").removeClass("big-title");