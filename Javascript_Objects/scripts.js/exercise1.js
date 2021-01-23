function Animal(n,k){
    this.name=n;
    this.kind=k;
    this.speak=function(string) {
        console.log(`${(this.kind).toUpperCase()} ${(this.name).toUpperCase()} says: ${string}`);
    }
}

let animalName=prompt("Enter the name of the animal");
let animalKind=prompt("Enter the kind of the animal");

let userAnimal=new Animal(animalName,animalKind);
console.log(userAnimal);
userAnimal.speak("Hello I am an animal and I can speak, can you imagine that?!");