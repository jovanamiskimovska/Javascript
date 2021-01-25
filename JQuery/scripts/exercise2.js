$(document).ready(function(){
let myDiv=$("#myDiv");
myDiv.after("<input type='text' id='text'>");
let textInput=$("#text");
textInput.after("<input type='color' id='color'>");
let colorInput=$("#color");
colorInput.after("<input type='button' value='generate h1' id='button'>");
let button=$("#button");

function printHeader(text,col){
    if(text==""){
        button.after("<h3>You need to enter some text in the text field!</h3>")
    }
    else{   
        button.after(`<h1>${text}</h1>`);
        $("h1:first").css("color",`${col}`);
    }
}

button.click(function(){
    printHeader(textInput.val(),colorInput.val());
})

})