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

    return money % 1.5;  // remainder of this division
  }
  
// Modulo
// var e = 9 % 6; //3 remainder is 3 so, e = 3

var change = getMilk(4);
// change = 1

function getMilk(money) {
    return money % 1.5;
} // calling the function

// remember Math floor so you do not get decimals for whole numbers



// number of bottles based on money into its on own function


function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;

}

getMilk(5);



// New version for any amount


function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");


  console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");

  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");

  return money % 1.5;


}


function calcBottles(startingMoney, costPerBottle) {

var numberOfBottles = Math.floor(startingMoney / costPerBottle);

return numberOfBottles;

}


getMilk(5);

// to calculate change.


function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");


  console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");

  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");

  return calcChange(money, 1.5);
}


function calcBottles(startingMoney, costPerBottle) {

var numberOfBottles = Math.floor(startingMoney / costPerBottle);

return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello master, here is your " +  getMilk(5) + " change.");

// less repetition 

function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");


  console.log("buy " + calcBottles(money,costPerBottle) + " bottles of milk");

  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveUp");

  return calcChange(money, 1.5);
}


function calcBottles(startingMoney, costPerBottle) {

var numberOfBottles = Math.floor(startingMoney / costPerBottle);

return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello master, here is your " +  getMilk(10, 3) + " change.");