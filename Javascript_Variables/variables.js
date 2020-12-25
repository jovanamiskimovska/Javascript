// Exercise 1 - declaring different types of variables and print their type and value

var firstVar=false;
console.log(firstVar);
console.log(typeof(firstVar));
document.write("The value of the first variable is " + firstVar + "<br> Its type is: " + typeof(firstVar));

var secondVar=13;
console.log(secondVar);
console.log(typeof(secondVar));
document.write("<br> The value of the second variable is: " + secondVar + "<br> Its type is: " + typeof(secondVar));

var thirdVar="This is a string";
console.log(thirdVar);
console.log(typeof(thirdVar));
document.write("<br> The value of the third variable is: " + thirdVar + "<br> Its type is: " + typeof(thirdVar));

// Exercise 2 - A Javascript program that calculates the price of 30 phones, where the price of one phone is $119.95 and the tax rate is 5%

var quantity=30;
var price=119.95;
var rate=5/100;
var phonePrice=price*rate;
var fullPrice=phonePrice*quantity;

document.write("<br> <br>The price of one phone with the 5% tax calculated is: " + phonePrice + " $" + "<br> The full price for all the 30 phones with the tax calculated is: "+ fullPrice +" $");

console.log(fullPrice);
console.log(typeof(fullPrice));

// Bonus - The tax and price should be inputted by the user

var price=prompt(" Enter the price for one phone in $:");
var taxRate=prompt("Enter the tax rate per one phone in %");
var phoneQuantity=30;
var fullPrice$=null;
fullPrice$=(price*(taxRate/100))*phoneQuantity;
document.write("<br> <br> The full price of all the 30phones with the tax calculated is: "+ fullPrice$ + " $");
console.log(fullPrice$);

// Exercise 3 - Calculate the area of a circle with the radius got as user input

var circleRadius=prompt("Enter the circle radius in meters:");
var pi=3.14;
var area=null;
area=(circleRadius*circleRadius)*pi;
document.write("<br> <br>The are of the circle with a radius of: " + circleRadius + " is " + area+" m");
console.log(area);