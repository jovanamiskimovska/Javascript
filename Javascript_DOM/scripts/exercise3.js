let title1=document.getElementById("title");
let result1=document.getElementById("result");

function weightinChickens(weight, title,item){
    let chickens=(weight/0.5);
    title1.innerHTML="";
    title1.innerHTML+="Your weight in chickens is:"
    item.innerHTML="";
    item.innerHTML+=`${chickens}`;
}

let userKilograms=parseFloat(prompt("Enter your weight in kg"));
weightinChickens(userKilograms,title1,result1);