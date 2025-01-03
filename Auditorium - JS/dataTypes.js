# Data types

**The String Data type**

console.log("3" + "2");

"A string starts and ends with a double quote"

It is telling the computer this part should be treated as text even a number 

**The Number Data Type**

console.log("3" + "2"); // 32
console.log(3 + 2); // 5

**Integers**

//This is a whole number
42

**Floats**

//This is a decimal number
3.14159


**The Boolean Data Type**

true

false

How to check data type

typeof("3" + "2");
//string + string = string

typeof(23 + 34 + 12);
//number + number + number = number

Check 2 data types

console.log(typeof(3.1415 + "2"));

**Automatic Type Conversion**

console.log("3" + 1); // 31
console.log(typeof("3" + 1));

console.log("3" - 1); // 2
console.log(typeof("3" - 1));

31
string
2
number

**Manual Type Conversion**

example: Convert to Number

Number(”21”)

//21


// Input
console.log(typeof("21"));
console.log(typeof(2 + 5));
console.log(typeof(Boolean(false)));

// Output

string
number
boolean