let button=document.getElementById("button");
let text=document.getElementById("text");
let h3=document.getElementById("message");

function Pet(name,type,age,isHealthy,owner){
    this.name=name;
    this.type=type;
    this.age=age;
    this.isHealthy=isHealthy;
    this.owner=owner;
    this.isAdopted=function(){
     return !!this.owner;    
    }
}

function Person(fName,lName,age){
  this.firstName=fName;
   this.lastName=lName;
  this.age=age;
  this.printPets=function(){
    if(this.hasOwnProperty("pets")){
      h3.innerText="";
      h3.innerText+=`The pets of ${this.firstName} ${this.lastName} are:`;
      for(pet of this.pets){
        h3.innerText+=` ${pet.name}`;
      }
    }
  }
}
 
let firstPet=new Pet("Roko","dog",7,true,"John");
let secondPet=new Pet("Bella","cat",5,false);
let thirdPet=new Pet("Astra","bear",9,true,"John");
let fourthPet=new Pet("King","lion",2,false);

let firstPerson=new Person("John","Johnson",27);
let secondPerson=new Person("Sam","Smith",20);

let pets=[firstPet,secondPet,thirdPet,fourthPet];
let people=[firstPerson,secondPerson];

console.log(pets);
console.log(people);

button.addEventListener("click",function(){
  let ownerOfPet;

  if(!text.value){
    h3.innerText=`You must enter a name!`;
    return;
  }
  else{
    for(let person of people){
      if(person.firstName.toLowerCase()===text.value.toLowerCase()){
ownerOfPet=person;
break;
      }
    }
    if(!ownerOfPet){
      h3.innerText="";
      h3.innerText=`There is not an owner with that name`;
      return;
    }
ownerOfPet.pets=[];
for(let pet of pets){
  if(!!pet.owner && pet.owner.toLowerCase()===ownerOfPet.firstName.toLowerCase()){
    ownerOfPet.pets.push(pet);
  }
}
  }
  ownerOfPet.printPets();
})

