$(document).ready(function(){

    let myDiv=$("#myDiv");
    myDiv.after("<input type='text' id='text'>");
    let text=$("#text");
   text.after("<input type='button' value='click me' id='button'>");
   let button=$("#button");

    button.click(function(){
        console.log(text.val());
        $("h1").remove();
        button.after(`<h1>Hello there: ${text.val()}</h1>`)
        text.css("color","red"); 
        $("h1").css("color","blue");  
    })
})

