function Pet(n,t,a,iH,o){
    this.name=n;
    this.type=t;
    this.age=a;
    this.isHealthy=iH;
    this.owner=o;
    this.isAdopted=function(){
     return !!this.owner;
     
    }
}

function Person(fN,lN,a){
  this.firstName=fN;
   this.lastName=lN;
  this.age=a;
}
 
let firstPet=new Pet("Roko","dog",7,true,"John");
let secondPet=new Pet("Bella","cat",5,false);
let thirdPet=new Pet("Astra","bear",9,true,"John");
let fourthPet=new Pet("King","lion",2,false);

let firstPerson=new Person("John","Johnson",27);
let secondPerson=new Person("Sam","smith",20);

let pets=[firstPet,secondPet,thirdPet,fourthPet];
let people=[firstPerson,secondPerson];

console.log(pets);
console.log(people);

let button=document.getElementById("button");
let text=document.getElementById("text");
