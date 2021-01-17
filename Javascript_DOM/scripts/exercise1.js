let firstDiv=document.getElementById("first");
let firstDivChild=firstDiv.firstElementChild;
firstDivChild.innerText="";
firstDivChild.innerText="This is the first changed text and it looks really cool!";
console.log(firstDivChild.innerText);

let paragpraph=document.getElementsByTagName("p")[0];
paragpraph.innerText="";
paragpraph.innerText="You just have to practice a little bit and you will figure things out!";
console.log(paragpraph.innerText);

let secondDiv=document.getElementsByClassName("anotherDiv");
let child=secondDiv[0];
child.innerText="";
child.innerText="Just try!";
console.log(child.innerText);

let text=document.getElementsByTagName("text");
text.innerText="";
text.innerText="It's about selecting items by their id or class name etc and applying their values";
console.log(text.innerText);

let lastDiv=document.getElementsByTagName("div")[2];
let lastChild2=lastDiv.lastElementChild;
lastChild2.innerText="";
lastChild2.innerText="And this is changed too!";


let previousSibling=lastChild2.previousElementSibling;
previousSibling.innerText="";
previousSibling.innerText="This is changed";
console.log(previousSibling.innerText);
console.log(lastChild2.innerText);


