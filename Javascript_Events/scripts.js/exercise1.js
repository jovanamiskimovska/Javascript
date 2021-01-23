let div1=document.getElementById("myDiv");
let inputFName=div1.children[0];
let inputLName=div1.children[2];
let button=div1.children[4];
let div2=document.getElementById("content")

function validateName(fName,lName,fLength,lLength){
if(fName.length>fLength && lName.length>lLength){
    div2.textContent=`Hello ${inputFName.value} ${inputLName.value}`;
}
else{
    div2.textContent=`Your first name should be at least ${fLength} characters long and your last name should be at least ${lLength} characters long`;
}}

button.addEventListener("click",function(){
    validateName(inputFName.value,inputLName.value,2,3)    
    }
)

div2.addEventListener("mouseover",function(event){
    event.target.textContent="";
})