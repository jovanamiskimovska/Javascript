$(document).ready(function(){

let btnPeople=$("#btnPeople");
let btnShips=$("#btnShips");

let result=$("#result");


    function getResultPeople() {
        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/people/?page=1`,
            success: function (valueResult) {
                printInfoPeople(valueResult, result);
            },
            error: function (e) {
               result.text("Error");
            }
        })

    }

function getResultShips() {
        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/starships/?page=1`,
            success: function (valueResult) {
                printInfoShips(valueResult, result);
            },
            error: function (e) {
               result.text("Error");
            }
        })

    }


function printInfoPeople(value,res) {
    for(let i=0;i<10;i++){
    res.text(`The name is: ${value[i].name} the height is: ${value[i].height} the mass is: ${value[i].mass} the gender is: ${value[i].gender}`);
}
}

function printInfoShips(value,res) {
    for(let i=0;i<10;i++){
    res.text(`The name is:${value[i].name} the model is: ${value[i].model} the manufacturer is: ${value[i].manufacturer} the length is: ${value[i].length}`);
}}


btnShips.click(function(){
    getResultShips();
})

btnPeople.click(function(){
    getResultPeople();
})

})