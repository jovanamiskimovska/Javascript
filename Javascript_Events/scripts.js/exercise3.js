let myDiv=document.getElementById("onlyDiv");
let fName=document.getElementById("firstname");
let lName=document.getElementById("lastname");
let email=document.getElementById("email");
let pass=document.getElementById("password");
let button=document.getElementById("button");

function printString(str1,str2,str3,str4){
myDiv.innerHTML+=`<p>${str1} ${str2} ${str3} ${str4}</p>`;
}

function getValues(){
  str1=fName.value;
  str2=lName.value;
  str3=email.value;
  str4=password.value;
  return printString(str1,str2,str3,str4);
  fName.innerHTML="";
  lName.innerHTML="";
  email.innerHTML="";
  password.innerHTML="";
}

button.addEventListener("click",getValues);