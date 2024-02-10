var name = "Conner"

var name = "Conner";
name = name.toUpperCase();
name = name.toLowerCase();

//1 Create Var that stores the name that user enters via prompt.

var name = prompt("What is your name?");

//2 Capitalise the first letter of their name.

//a isolate the first char
var firstChar = name.slice(0,1);

//b turn the char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c isolate rest of the name
var restOfName = name.slice(1,name.length);

//d change rest of name to lower case
restOfName = restOfName.toLowerCase();

//e concatenate the char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

//3 Use the capitalised verison of their name to greet them using an alert.

alert("Hello, " + capitalisedName);