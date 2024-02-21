function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveUp");
  
    var numberOfBottles = money / 1.5;
  
    console.log("buy " + numberOfBottles + " bottles of milk");
  
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveUp");
    return money % 1.5;
  }
  
// Modulo
// var e = 9 % 6; //3 remainder is 3 so, e = 3

var change = getMilk(4)
// change = 1

function getMilk(money) {
    return money % 1.5;
}