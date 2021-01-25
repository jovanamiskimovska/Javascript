$(document).ready(function(){
    let button=$("#button");
    let input1=$("#input1");
    let input2=$("#input2");
    let input3=$("#input3");

    function printAverage(num1,num2,num3){
        let sum=num1+num2+num3;
        console.log(sum)
        let average=(sum/3); 
        if(average>=10){
            button.after(`<h1 id='h1-bigger'>The average is: ${average}</h1>`);
            $("#h1-bigger").css("color","green"); // moze i so h1:first bez id, ama sakav i vaka da probam
        } 
        else{
            button.after(`<h1 id='h1-smaller'>The average is: ${average}</h1>`);
            $("#h1-smaller").css("color","red");
        }
       
    }

    button.click(function(){
        printAverage(parseInt(input1.val()),parseInt(input2.val()),parseInt(input3.val()));
    })
})