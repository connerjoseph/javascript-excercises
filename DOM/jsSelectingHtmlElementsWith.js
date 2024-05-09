document.getElementsByTagName("li");
HTMLCollection(3) [li.list, li.list, li.list]

// plural, must select index due to array "getElementsByTagName"

document.getElementsByClassName("btn").stylecolor="red";
//wrong
document.getElementsByClassName("btn")[0].stylecolor="red";
//select first item by using index

document.getElementById("title");
//not  plural you will only get back a single item



document.querySelector()
// to select element write name of element, to select class put "." in front of class
// to select id add # in front 


document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");

// combining selector

document.querySelector(".btn");