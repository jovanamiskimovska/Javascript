// Javascript program that gets the user's input and calculates the Chinese Zodiac

var year = parseInt(prompt("Enter the year"));

if (((year - 4) % 12) == 0) {
    alert("RAT");
    console.log("RAT");
}
else if (((year - 4) % 12) == 1) {
    alert("OX");
    console.log("OX");
}
else if (((year - 4) % 12) == 2) {
    alert("TIGER");
    console.log("TIGER");
}
else if (((year - 4) % 12) == 3) {
    alert("RABBIT");
    console.log("RABBIT");
}
else if (((year - 4) % 12) == 4) {
    alert("DRAGON");
    console.log("DRAGON");
}
else if (((year - 4) % 12) == 5) {
    alert("SNAKE");
    console.log("SNAKE");
}
else if (((year - 4) % 12) == 6) {
    alert("HORSE");
    console.log("HORSE");
}
else if (((year - 4) % 12) == 7) {
    alert("GOAT");
    console.log("GOAT");
}
else if (((year - 4) % 12) == 8) {
    alert("MONKEY");
    console.log("MONKEY");
}
else if (((year - 4) % 12) == 9) {
    alert("ROOSTER");
    console.log("ROOSTER");
}
else if (((year - 4) % 12) == 10) {
    alert("DOG");
    console.log("DOG");
}
else if (((year - 4) % 12) == 11) {
    alert("PIG");
    console.log("PIG");
}
else {
    alert("ERROR");
    console.log("ERROR");
}


// JavaScript function which accepts a parameter and returns its type and prints it in the console

function parameterType(parameter) {
    console.log("The type of the parameter is: " + typeof (parameter));
}

parameterType(7);
parameterType("Hello!");
parameterType(true);
parameterType(null);
parameterType("");
parameterType(undefined);

// JavaScript function that calculates and returns your dog's age based on the conversion rate of 1 human year to 7 dog years

function convertYears() {
    let type = prompt("Enter H for Human years or D for Dog years:");
    let year = parseInt(prompt("Enter the age you want to convert: "));

    if (type === "H") {
        if (isNaN(year)) {
            console.log("You have to insert a number!");
        }
        else {
            year *= 7;
            console.log("Your dog's age is: " + year);
        }
    }
    else if (type === "D") {
        if (isNaN(year)) {
            console.log("You have to insert a number!");
        }
        else {
            year /= 7;
            console.log("Your dog's age converted to human years is: " + year);
        }
    }
    else {
        console.log("ERROR");
    }
}

convertYears();

// Javascript function that takes two numbers: the numbers of girls and boys in a team, prints these numbers in console, but add girls and boys correspondingly after them, example, if the input is 4, 7, the function should print 4 girls 7 boys

function girlsBoysNumber(girlsNumber, boysNumber) {

    if (girlsNumber < 10 && boysNumber < 10) {
        console.log("There are: " + 0 + girlsNumber + " girls" + " " + 0 + boysNumber + " boys");
    }
    else if (girlsNumber < 10 && boysNumber >= 10) {
        console.log("There are: " + 0 + girlsNumber + " girls" + " " + boysNumber + " boys");
    }
    else if (girlsNumber >= 10 && boysNumber >= 10) {
        console.log("There are: " + girlsNumber + " girls" + " " + boysNumber + " boys");
    }
    else {
        console.log("ERROR");
    }

}

girlsBoysNumber(5, 17);
girlsBoysNumber(10, 10);
girlsBoysNumber(7, 9);

// // Javascript function for ATM

let amount = parseInt(prompt("How much money would you like to withdraw from your account?"));

function moneyRequest(request) {

    let cash = 1000;

    if (request > cash) {
        console.log("Not enough money on your account!");
    }
    else if (request <= cash) {
        cash = cash - request;
        console.log("The amount withdrawn from your account is: " + request + "$" + ` You have ${cash}$ left on your account`)
    }
    else {
        console.log("ERROR");
    }
}

moneyRequest(amount);