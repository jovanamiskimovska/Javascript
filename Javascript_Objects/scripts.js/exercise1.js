function Animal(name,kind){
    this.name=name;
    this.kind=kind;
    this.speak=function(string) {
        console.log(`${(this.kind).toUpperCase()} ${(this.name).toUpperCase()} says: ${string}`);
    }
}
function getNameAndKind(nameAnimal, kindAnimal){
    if(!nameAnimal || !kindAnimal){
        console.log("You have to enter values in both of the input fields!");
    }
    else if(!isNaN(nameAnimal) || !(isNaN(kindAnimal))){
        console.log("The animal name and kind should be a string!");
    }
    else{
        return nameAnimal,kindAnimal;
    }
}

let animalName=document.getElementById("name").value;
let animalKind=document.getElementById("kind").value;

let userAnimal=new Animal(getNameAndKind(animalName,animalKind));
console.log(userAnimal);
userAnimal.speak("Hello I am an animal and I can speak, can you imagine that?!");