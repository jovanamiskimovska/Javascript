function sumOfSalaries(array){
    let sum=0;
    for(let person of array){
        sum+=person.salary;
    }
    return sum;
}

let allPeople=[{fullName:"John Smith", job:"engineer", salary: 5000}, {fullName:"Jackie Rose", job:"vet", salary: 2500},{fullName:"Calvin Harris", job:"dj", salary: 10000}];
let salariesSum=sumOfSalaries(people);
console.log(salariesSum);