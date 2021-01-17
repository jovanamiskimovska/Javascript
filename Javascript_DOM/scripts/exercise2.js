let firstDiv=document.getElementById("sumDiv");
let list=firstDiv.firstElementChild;
let text=document.getElementById("sumText");
let stringText=firstDiv.lastElementChild;

let array=[1,2,3,4,5,6,7,8,9,10];

function printNumbers(array,item){
    item.innerHTML+="<ul>";
    for(let number of array){
        item.innerHTML+=`<li>${number}</li>`;
    }
    item.innerHTML+="</ul>";
}

function sumNumbers(array,sumContent){
    let sum=0;

    for(let n of array){
        sum+=n;  
        let counter=1;
        if(n==array[array.length-1]){
            stringText.innerText+=`${n}`
        }
        else{
        stringText.innerText+=`${n}+` 
        }
        
    }
    printNumbers(array,list);
sumContent.innerHTML="";
sumContent.innerHTML+=`The sum of the numbers is: ${sum}`;
stringText.innerText+=`=${sum}`
}

sumNumbers(array,text);


