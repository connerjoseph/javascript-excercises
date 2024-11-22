var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Connie",
    CleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}


// Constructor Function

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.Languages = languages;
}

// Initialise Object 

var bellBoy = new BellBoy("Bob", 19, true, ["French", "Mandarin"]);

var bellBoy = new BellBoy("John", 30, true, ["French", "Thai"]);

var bellBoy = new BellBoy("Marko", 42, false, ["Spanish", "English"]);