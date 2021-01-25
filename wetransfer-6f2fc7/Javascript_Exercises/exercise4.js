$(document).ready(function(){
    let text=$("#text");
    let button=$("#button");
    let select=$(".selectOptions");
    select.after("<p id='paragraph'></p>");
    let paragraph=$("#paragraph");

    
    button.click(function() {
        paragraph.text();
        if(!text.val()){
          paragraph.text("You have to enter text in the input field");
        }

        select.after(`<option id="option1"></option>`);
        let option1=$("#option1");
        option1.val(`${text.val()}`);
        option1.text(`${text.val()}`);    

    })
    text.blur(function(){
    paragraph.text();
    if(!text.val()){
        paragraph.val("You have to enter text in the input field");
    }
})

})





