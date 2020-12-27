// Javascript code that gets an input for 5 different numbers and prints the max in an alert box

 var input1=prompt("Enter the first number");
 var number1=parseInt(input1);

 var input2=prompt("Enter the second number");
 var number2=parseInt(input2);

 var input3=prompt("Enter the third number");
 var number3=parseInt(input3);

 var input4=prompt("Enter the fourth number");
 var number4=parseInt(input4);

 var input5=prompt("Enter the fifth number");
 var number5=parseInt(input5);

 var max=0;
 var brojac=0;

 while(brojac<5){
 if(number1>max){
     max=number1;
     brojac++;
 }
 else if(number2>max){
     max=number2;
     brojac++;
 }
 else if(number3>max){
     max=number3;
     brojac++;
 }
 else if(number4>max){
     max=number4;
     brojac++;
 }
 else if(number5>max){
     max=number5;
     brojac++;
 }
 else 
     brojac++;
 }

 alert("The max number is: " + max);

// Javascript program that gets the name and surname as an input and prints a greeting with using INTERPOLATION and CONCATENATION of strings

 var name1=prompt("Enter the name");
 var surname=prompt("Enter the surname");

 var interpolationGreeting=`Hello, I am ${name1} ${surname} and this is made with Interpolation of strings!`;
 alert(interpolationGreeting);
 console.log(interpolationGreeting);

 var concatenationGreeting = "Hello,"+" "+"I am"+" "+name1+" "+surname+" "+"and this is made with Concatenation of strings!";
 alert(concatenationGreeting);
 console.log(concatenationGreeting);

// Javascript code that gets an input from the user and calculates which Chinese Zodiac a given year is in

var year = prompt("Enter the year");
var yearInt = parseInt(year);

switch ((year - 4) % 12) {
    case 0:
        alert("RAT");
        console.log("RAT");
        break;
    case 1:
        alert("OX");
        console.log("OX");
        break;
    case 2:
        alert("TIGER");
        console.log("TIGER");
        break;
    case 3:
        alert("RABBIT");
        console.log("RABBIT");
        break;
    case 4:
        alert("DRAGON");
        console.log("DRAGON");
        break;
    case 5:
        alert("SNAKE");
        console.log("SNAKE");
        break;
    case 6:
        alert("HORSE");
        console.log("HORSE");
        break;
    case 7:
        alert("GOAT");
        console.log("GOAT");
        break;
    case 8:
        alert("MONKEY");
        console.log("MONKEY");
        break;
    case 9:
        alert("ROOSTER");
        console.log("ROOSTER");
        break;
    case 10:
        alert("DOG");
        console.log("DOG");
        break;
    case 11:
        alert("PIG");
        console.log("PIG");
        break;
}

