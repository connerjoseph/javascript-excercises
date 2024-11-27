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
// add multiple classes
$("h1").addClass("big title margin 30");

// in console
$("h1").hasClass("margin-30");

// MANIPULATING TEXT

$("h1").text("Bye");

$("button").text("Don't Click Me");

// MANIPULATING ATTRIBUTES

$("img").attr("src")
console.log($("img").attr("src"));

//amending href attribute

$("a").attr("href", "https://yahoo.com");

// ADD EVENT LISTENERS 

$("h1").click(function() {
    $("h1").css("colour", "red")
});


// code without jQuery >>

for (var i = 0; i<5;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    })
}

// code using jQuery

$("button").click(function() {
    $("h1").css("color", "purple");
});

// key press event listener, logging the keys pressed in the input box

$("input").keypress(function(event) {
    console.log(event.key);
});

//change h1 by pressing a key

$("input").keypress(function(event) {
    $("h1").text(event.key);
});

// Using method "on"

$("h1").on("mouseover", fucntion() {
    $("h1").css("color", "purple");
});