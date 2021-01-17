
function addIngredient(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        let element = prompt(`Enter the ingredient at index:${i}`);
        array.push(element);
    }
    return array;
}

function amountIngredient(ingredientArray) {
    let amountArray = [];
    for (let i = 0; i < ingredientArray.length; i++) {
        let amountElement = prompt(`Enter the amount of the ingredient ${ingredientArray[i]}:`);
        amountArray.push(amountElement);
    }
    return amountArray;
}

function printRecipe(nameRecipe, numberOfIngredients, stringIngredientArray, amountOfIngredient) {
    let recipeTitle=document.getElementById("title");
    recipeTitle.innerHTML = "";
    recipeTitle.innerHTML += `<h1>${nameRecipe}</h1>`;

    let secondDiv = document.getElementById("recipe");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let th1=document.createElement("th");
    th1.textContent+="Ingredient";
    let th2=document.createElement("th");
    th2.textContent+="Amount";
    tbody.appendChild(th1);
    tbody.appendChild(th2);

    for (let i = 0; i < numberOfIngredients; i++) {
        let tr = document.createElement("tr");
        console.log(tr);
        tbody.appendChild(tr);

        let td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.textContent += `${stringIngredientArray[i]}`;

        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent += `${amountOfIngredient[i]}`;
    }

    table.setAttribute("border", "5");
    
    table.appendChild(tbody);
    secondDiv.appendChild(table);

}

let nameR = prompt("Enter the name of the recipe:");
let userNumber = parseInt(prompt("Enter how many ingredients does the recipe have?"));
let userIngredientArray = addIngredient(userNumber);
let userAmountIngredient = amountIngredient(userIngredientArray);
printRecipe(nameR, userNumber, userIngredientArray, userAmountIngredient);


