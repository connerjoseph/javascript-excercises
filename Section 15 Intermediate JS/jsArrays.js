// can store single piece of data in "var a = "Text", "var b = "123"

// can store collection of data into array, collection of related items
// var eggs = [1,2,3,4,5]
// var myEgg = eggs[1]; computers start counting at 0
// eggs.length; = 5

// square brackets usually used with collection data type






var guestList = ["Bob", "Mint", "Conner", "Chichi", "Gak"];
console.log(guestList); //print

var guestList = ["Bob", "Mint", "Conner", "Chichi", "Gak"];
console.log(guestList.length); // count how many pieces of data

var guestList = ["Bob", "Mint", "Conner", "Chichi", "Gak"];
console.log(guestList[0]); // = "Bob" First piece of data

// create prompt to check guest name vs list


var guestList = ["Bob", "Mint", "Conner", "Chichi", "Gak"];

var guestName = prompt("What is your name?")

guestList.includes(guestName)

// add conditional

var guestList = ["Bob", "Mint", "Conner", "Chichi", "Gak"];

var guestName = prompt("What is your name?")

if (guestList.includes(guestName)) {
    if alert("welcome!");
} else {
    alert("Sorry, maybe next time.");
}