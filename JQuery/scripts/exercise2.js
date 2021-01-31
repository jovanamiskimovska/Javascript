$(document).ready(function(){
let myDiv=$("#myDiv");
myDiv.after("<input type='text' id='text'>");
let textInput=$("#text");
textInput.after("<input type='text' id='color'>");
let colorInput=$("#color");
colorInput.after("<input type='button' value='generate h1' id='button'>");
let button=$("#button");

function printHeader(text,color){
    if(!text || !color){
        $("h3").remove();
        $("h1").remove();
        button.after("<h3>You need to enter some text in the text field!</h3>")
    }
    else if(color.toLowerCase()=="red" || color.toLowerCase()=="blue" || color.toLowerCase()=="green" || color.toLowerCase()=="yellow"  ||color.toLowerCase()=="orange" ||color.toLowerCase()=="purple"){   
        $("h1").remove();
        $("h3").remove();
        button.after(`<h1>${text}</h1>`);
        $("h1:first").css("color",`${color}`);
    }
    else {
        $("h3").remove();
        $("h1").remove();
        button.after("<h3>You need to enter one of the primary colors: red, blue or yellow, or one of the secondary colors: yellow, green or purple!</h3>")
    }
}

button.click(function(){
    printHeader(textInput.val(),colorInput.val());
})

})