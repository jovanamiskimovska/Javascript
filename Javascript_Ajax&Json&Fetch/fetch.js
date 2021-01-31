let button= document.getElementById("button");
let paragraph=document.getElementsByTagName("p")[0];
let h3=document.getElementsByTagName("h3")[0];
let input=document.getElementById("number");

button.addEventListener("click", function(){
    if(input.value==""){
        paragraph.innerText="You need to enter a number!";
    }
    else{
    fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
    .then(todoJson =>{
        todoJson.json() 
        .then(todoObject=>{
       printInfo(todoObject,paragraph);
        h3.innerText="COMPLETED";
        });
    }) 
    .catch(err=>{
        h3.innerText="NOT COMPLETED";
    })}
})

function printInfo(result,p){
    p.innerText=`The id of the chosen todo is: ${result.id} and its title is: "${result.title}"`;
        }
