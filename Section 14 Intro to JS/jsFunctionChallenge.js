function main(){

goInCircle();
goInCircle();

}

function goInCircle() {
    move();
    turnLeft();
    move();
    turnLeft();
}

/////////////////////////////////////////////////////////////////

function main(){
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    turnRight();
    move();
    move();
    move();
 }

 // can create function to move 4 times so below you can
 
//////////////////////////////////////////////////////////////////////////

 function main() {
    move();
    turnLeft();
    moveFourTimes();
    turnRight();
    move();
    move();
    move();

 }

 function moveFourTimes() {
    move();
    move();
    move();
    move();
 }
///////////////////////////////////////////////////////////

 function main() {

    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }

 // instead create funtion for above


 function main() {
    putBeeper();
    diagonalMoveAndBepper();
    diagonalMoveAndBepper();
    diagonalMoveAndBepper();
    diagonalMoveAndBepper();


 }


 function diagonalMoveAndBepper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();

 }

///////////////////////////////////////////////////////////////



 
 
function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 