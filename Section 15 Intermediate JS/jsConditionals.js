if (track === "clear"){goStraight();}

else {turnRight();}


// more commonly structured

if (track === "clear"){
    goStraight();
} else {
    turnRight();
}

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore === 100){
    alert("Your love score is " + loveScore + "% " + "You love eachother like Kanye loves Kanye.");
} else {
    
}

console.log(loveScore);



// greater than > to have alert depending on certain percentage


var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your love score is " + loveScore + "% " + "You love eachother like Kanye loves Kanye.");
} else {
    
}


console.log(loveScore);
