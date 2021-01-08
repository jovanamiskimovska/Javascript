// Exercise 1 - Javascript program that prints the change of the value and type of the same variable

function variableChange() {
    let userInput = prompt("Enter the value of the variable: ");
    console.log(`The inserted value is ${userInput}` + "The type of the variable is: " + typeof (userInput));

    userInput = 10;
    console.log("The variable should change its value and type to a number: " + userInput + typeof (userInput));

    userInput = null;
    console.log("The variable should change its value to null and type: " + userInput + typeof (userInput));

    userInput = true;
    console.log("The variable should change its value to true and type to boolean: " + userInput + typeof (userInput));

    userInput = undefined;
    console.log("The variable should change its value to undefined and type: " + userInput + typeof (userInput));


}

variableChange();

// Exercise 2 - Read a name as user input and print a greeting saying "Merry Christmas Name" where Name is the entered name


function greeting() {
    let userName = prompt("Enter your name: ");
    console.log(`Merry Christmas ${userName}`);
}
greeting();

// JavaScript program to get the width and height of a rectangle and calculate its perimeter!

function perimeterRectangle(x, y) {
    if (isNaN(x) || isNaN(y)) {
        console.log("ERROR");

    }
    else {
        let perimeter = x * y;
        console.log(perimeter);
    }
}
perimeterRectangle(10, 10);
perimeterRectangle(5, "red");

// Javascript program to get a number and calculate its predecessor and successor!

function number() {
    let userNumber = parseInt(prompt("Enter a number to calculate its predecessor and successor: "));

    if (isNaN(userNumber)) {
        console.log("You haven't entered a number!")
    }
    else {
        let predecessor = userNumber - 1;
        console.log("The entered number's predecessor is: " + predecessor + "and its successor is: " + successor);
    }
}

number();
// // Javascript program that will find out which of two inserted integers is closer to 100

//without alerting for negative number
function closerTo100() {
    let number1 = parseInt(prompt("Enter the first number:"));
    let number2 = parseInt(prompt("Enter the second number:"))

    let result1 = Math.abs(100 - number1);
    let result2 = Math.abs(100 - number2);

    if (result1 < result2) {
        console.log("The closer number to 100 is: " + number1);
    }
    else if (result2 < result1) {
        console.log("The closer number to 100 is: " + number2);
    }
    else if (result1 == result2) {
        console.log("The two inserted integers are equally close to 100");
    }
    else {
        console.log("ERROR");
    }
}

closerTo100();

// //with alerting for inserted negative number

function closerTo100() {
    let number1 = parseInt(prompt("Enter the first number:"));
    let number2 = parseInt(prompt("Enter the second number:"));

    let result1 = Math.abs(100 - number1);
    let result2 = Math.abs(100 - number2);

    if (number1 < 0 || number2 < 0) {
        alert("You have entered a negative number");
    }
    else if (result1 < result2) {
        console.log("The closer number to 100 is: " + number1);
    }
    else if (result2 < result1) {
        console.log("The closer number to 100 is: " + number2);
    }
    else if (result1 == result2) {
        console.log("The two inserted integers are equally close to 100");
    }
    else {
        console.log("ERROR");
    }
}

closerTo100();

// Javascript program that calculates the sum of two numbers, if the numbers are same, triple their sum

function sumCalculation(x, y) {
    let suma = x + y;
    if (x === y) {
        suma *= 3;
        console.log("The numbers are equal and their sum trippled is: " + suma);
    }
    else if (x != y && (!isNaN(x)) && (!isNaN(y))) {
        console.log("The sum of the numbers is: " + suma);
    }
    else {
        console.log("ERROR");
    }
}

sumCalculation(10, 5);
sumCalculation(1, 1);
sumCalculation("true", 10);

// Javascript program that gets the results of the 5 exams as input and tells if the student has passed or not (the average for passing is 8)


let grade1 = parseInt(prompt("Enter the first grade:"));
let grade2 = parseInt(prompt("Enter the second grade:"));
let grade3 = parseInt(prompt("Enter the third grade:"));
let grade4 = parseInt(prompt("Enter the fourth grade:"));
let grade5 = parseInt(prompt("Enter the fifth grade:"));

function examPassing() {
    let sum = grade1 + grade2 + grade3 + grade4 + grade5;
    let average = sum / 5;

    if (average >= 8) {
        alert("Congratulations, you have passed!");
    }
    else if (average < 8) {
        alert("Sorry, you haven't passed the semestar!");
    }
    else {
        alert("ERROR");
    }
}

examPassing();

// JavaScript program to check two given numbers entered as input and return true if one of the number is greater than 30 or if their sum is 50. Make sure to use a function for the check that accepts the numbers as parameters!

let input1 = parseFloat(prompt("Enter the first number:"));
let input2 = parseFloat(prompt("Enter the second number:"));

function notANumberCheck(x, y) {

    if (isNaN(x) || isNaN(y))
        alert("You have inserted a variable that is not a number!");

}
function numberCheck(x, y) {

    if (notANumberCheck(x, y) == true) {
        return false;
    }
    else {
        let sum = x + y;

        if (x > 30 || y > 30) {
            console.log("At least one of the numbers is greater than 30");
            return true;
        }
        else if (sum === 50) {
            console.log("The sum is equal to 50");
            return true;
        }
        else {
            console.log("Neither the sum is equal to 50 nor one of the inserted numbers is greater than 30");
        }
    }
}

numberCheck(input1, input2);

//  Javascript program that checks if a number is divisible by 3

let inputNumber = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

function notANumberCheck(x) {
    if (isNaN(x))
        alert("You have to insert a number!");

}

function divisibleCheck(input) {

    if (notANumberCheck(input) == true) {
        return false;
    }
    else if (input % 3 == 0) {
        console.log("The number is divisible by 3");
    }
    else {
        console.log("The number is not divisible by 3");
    }
}


divisibleCheck(inputNumber);

// JavaScript program that gets a string as input. If the string begins with a vowel (a, e, i, o, u) add the string "Hit" at the beginning and end of the entered string. If not, print the entered string.

let input = prompt("Enter a string:");

function stringCheck() {

    let result = input.substring(0, 1);

    if ((result === "A") || (result === "E") || (result === "I") || (result === "O") || (result === "U") || (result === "a") || (result === "e") || (result === "i") || (result === "o") || (result === "u")) {
        let str1 = "Hit";
        let str2 = str1.concat(input, str1);
        return str2;
        //console.log("Hit"+input+"Hit");
    }
    else {
        return input;
    }
}

let resultFinal = stringCheck();
console.log(resultFinal);

// Javascript program that gets a string as input. If the string ends with "na", print "Hit", else print "No hit".

let stringInput = prompt("Enter a string:");

function stringInputCheck() {

    let stringLength = stringInput.length;
    let resultString = stringInput.substring((stringLength - 2), stringLength);

    if (resultString === "na") {
        let success = "Hit";
        return success;
    }
    else {
        let fail = "No hit";
        return fail;
    }
}

let finalResult = stringInputCheck();
console.log(finalResult);

// Javascript program that takes a grade as input. If the grade is A print "Excellent job!", if the grade is B print "Good job!", if the grade is C print "Passed", if the grade is D print "Not so good!", if the grade is F print "Failed!". In any other case print "Unknown grade! #Note: do not use if-else statements"

let inputGrade = prompt("Enter your grade: A,B,C,D,F");

function grade(input) {

    switch (input) {
        case "A":
            console.log("Excellent job!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("Passed");
            break;
        case "D":
            console.log("Not so good!");
            break;
        case "F":
            console.log("Failed!");
            break;
        default:
            console.log("Unknown grade!");
            break;
    }
}

grade(inputGrade);

