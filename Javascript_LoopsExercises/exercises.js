// Javascript function tellStory() that accepts an array of 3 strings as an argument: name, mood, activity and returns one big string with a story made from the arguments

function tellStory(name, mood, activity) {

  let storyString = `Hello, my name is ${name}. Today I am feeling really ${mood.toLowerCase()} that is why I am planning to do some activities such as ${activity.toLowerCase()}. You should try that too!`

  return storyString;
}

let userName = prompt("Enter your name");
let userMood = prompt("Enter your mood");
let userActivity = prompt("Enter your planned activity based on your mood");

alert(tellStory(userName, userMood, userActivity));

// Javascript function that will take an array of 5 numbers as an argument and return the sum. Check the number validation with another function and return an ERROR if one of the numbers is invalid

function validateNumber(input) {
  if (typeof input != "number")
    return -1;
}

function sumNumbers(array) {
  let sum = 0;
  let flag = false;

  for (let i = 0; i < array.length; i++) {
    if (validateNumber(array[i])) {
      flag = true;
      break;
    }
    else {
      sum += array[i];
    }
  }

  if (flag) {
    console.log("Error - You have to enter a number!");
  }
  else {
    console.log("The sum of the numbers is: " + sum);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumNumbers(array);

let arrayWithString = [1, 1, "Hello"];
sumNumbers(arrayWithString);

// Javascript function that when given any array of strings (should work with array with any number of elements) it will create one big string and return it

function bigString(array) {
  let string = " ";
  for (let i = 0; i < array.length; i++) {
    string += `${array[i]} `;
  }
  return string;
}

// let userArray=["Hello","I","am","Jovana","!"];
// console.log(bigString(userArray));

function insertElementInAnArray(number) {
  let userArray = [];

  for (let i = 0; i < numberOfElements; i++) {
    let element = prompt(`Enter the element at index ${i}`);
    userArray[i] = element;
  }
  return userArray;
}

let numberOfElements = parseInt(prompt("Enter the number of elements of the array"));
console.log(bigString(insertElementInAnArray(numberOfElements)));

// A loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space

function insertElementInAnArray(number) {
  let userArray = [];

  for (let i = 0; i < number; i++) {
    let element = parseInt(prompt(`Enter the number at index ${i}`));
    if (isNaN(element)) {
      continue;
    }
    else {
      userArray[i] = element;
    }
  }
  return userArray;
}

function evenOrOdd(array) {
  let result = " ";
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result += `${array[i]}` + "\n";
    }
    else {
      result += `${array[i]} `;
    }

  }
  return result;
}

let numberOfElements = parseInt(prompt("Enter the number of elements of the array"));
console.log(evenOrOdd(insertElementInAnArray(numberOfElements)));

// function evenOrOdd() {
//    let result = " ";
//    for (let i = 1; i <= 20; i++) {
//       if (i % 2 == 0) {
//          result += `${i}` + "\n";
//       }
//       else {
//          result += `${i} `;
//       }

//    }
//    return result;
// }

// console.log(evenOrOdd()); // konkretno za zadacata


// JavaScript function that will return: The sum of the MAX and MIN numbers from an array with numbers

function sumMinMax(input) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] != "number") {
      counter++;
      continue;
    }
    else {
      if (input[i] > max) {
        max = input[i];
      }
      if (input[i] < min) {
        min = input[i];
      }
    }
  }
  if (counter == input.length) {
    console.log("You haven't entered a number")
  }
  else {
    console.log(sum = min + max);
  }
}

let array = [1, 2, 3, 5, 6, 7, 8, 10, "Hello"];
sumMinMax(array);


// A javascript function that: When given 2 arrays of students firstNames and lastNames will return a new array with students full names every name should have a numeric value before it

function fullNames(firstName, lastName) {
  let newArray = [];
  for (let i = 0; i < firstName.length; i++) {
    newArray[i] = `${i + 1}. ${firstName[i]} ${lastName[i]}`;
    newArray[i] = (i + 1) + ". " + firstName[i] + " " + lastName[i];
  }
  return newArray;
}

let firstNames = ["John", "Hunter", "Dave"];
let lastNames = ["Smith", "Haven", "Johnson"];

let result = fullNames(firstNames, lastNames);
console.log(result);



