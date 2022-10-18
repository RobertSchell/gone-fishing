const prompt = require('prompt-sync')({sigint: true});

let caughtFish = [];

console.log("\nYou've gone fishing! Try to maximize the value of your caught fish.");
console.log("You can fish for six hours (til 12:00pm) and catch at most 10 lbs. of fish.\n");

for(let i = 6; i < 12; i++){
    console.log("=============================================\n");
    console.log(`The time is ${i}:00am. So far you've caught:`);

console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
console.log("=============================================\n")

let fish = generateRandomFish();
console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.value}`);
    
let currentTotalWeight = getTotalWeight();

if(currentTotalWeight + fish.weight > 10){
    console.log("\nThis fish would put you over 10 lbs, so you can release it.\n");
    console.log("Press any key to continue");
    prompt("> ");

    continue;
}

console.log("\nYour action: [c]atch or [r]elease?");
let action = prompt('> ');

while(action !== "c" && action !== "r"){
    console.log("Please enter [c] or [r]");
    action = prompt("> ");
}
    if(action === "c"){
       caughtFish.push(fish);
       console.log(`\n You chose to keep the ${fish.name}!\n`);

    }else if(action === "r"){
        console.log(`\n You chose to release the ${fish.name}.\n`);
    }

}
console.log("\n=============================================\n");

console.log("The time is 12:00pm. Times up!\n");

console.log(`You caught ${caughtFish.length} fish!:`);

for (let i = 0; caughtFish.length > i; i++){
    console.log(`* ${caughtFish[i].name}, ${caughtFish[i].weight} lbs, $${caughtFish[i].value}`)
}

console.log(`\nThe total weight of your fish is: ${getTotalWeight()} lbs`);

console.log(`The total value of your fish: $${getTotalValue()}`);


function generateRandomWeight(){
    let weight = Number((Math.random() * 5).toPrecision(3));
    
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3));
    }
    return weight;
}

function generateRandomValue(){
    let value = Number((Math.random() * 5).toPrecision(3));

    while(value < .1){
        value = Number((Math.random() * 5).toPrecision(3));
    }

    if(value < 1){
        value = Number(value.toPrecision(2));
    }
    return value;
}

function generateRandomName(){
    let adjectives = ['shiny', 'red', 'dull', 'blue', 'slimy', 'green', 'dry', 'yellow', 'vibrant', 'purple', 'floppy', 'orange', 'silly', 'silver'];
    let types = ["salmon", "trout", "bass", "flounder", "perch", "snapper", "cod", "grouper", "tuna", "catfish", "blobfish", "blowfish"];

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    while(adj1 === adj2){
        adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    }

    let type = types[Math.floor(Math.random() * types.length)];

    return(`${adj1} ${adj2} ${type}`);
}

function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();
    
    return fish;
}

function getTotalWeight(){
let totalWeight = 0;
    for(let i = 0; i<caughtFish.length; i++){
        let currentFish = caughtFish[i];
        totalWeight += currentFish.weight;
    }
    return Number(totalWeight.toPrecision(3));
}

function getTotalValue(){
let totalValue = 0;
    for(let i = 0; i<caughtFish.length; i++){
        let currentValue = caughtFish[i];
        totalValue += currentValue.value;
    }
    return Number(totalValue.toPrecision(3));
}