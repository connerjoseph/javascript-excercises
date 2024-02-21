// creating the function

function getMilk(bottles) {
  var cost = bottles * 1.5;
}
// do something with cost

getMilk(2);

//calling the function ^

function getMilk(bottles) {
  console.log("moveUp");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("move");
  console.log("buy" + bottles + "bottles of milk");
}

getMilk(12);

// cost of

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
}

getMilk(5);


// Rounding to whole number, must go down because you can't round up to the quanitity of items you buy

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");

  var numberOfBottles = Math.floor(money / 1.5);

  console.log("buy " + numberOfBottles + " bottles of milk");

  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");
}

getMilk(5);


/// let x = Math.floor(1.6)