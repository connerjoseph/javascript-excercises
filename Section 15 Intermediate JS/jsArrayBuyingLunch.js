// example input ["Conner", "Mint", "Bob", "Opop", "Ma"]




function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}



// for selecting randomly who will buy lunch