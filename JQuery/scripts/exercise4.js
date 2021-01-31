$(document).ready(function(){
    let button=$("#button");
    let input1=$("#input1");
    let input2=$("#input2");
    let input3=$("#input3");

    function printAverage(num1,num2,num3){
        let sum=num1+num2+num3;
        console.log(sum);
        let average=(sum/3); 
        if(average>=10){
            $("h1").remove();
            button.after(`<h1>The average is: ${average}</h1>`);
            $("h1").css("color","green"); 
        } 
        else{
            $("h1").remove();
            button.after(`<h1>The average is: ${average}</h1>`);
            $("h1").css("color","red");
        }
       
    }

    button.click(function(){
        printAverage(parseFloat(input1.val()),parseFloat(input2.val()),parseFloat(input3.val()));
    })
})