$(document).ready(function(){
    let text=$("#text");
    let button=$("#button");
    let select=$(".selectOptions");

    button.click(function() {
        if(!text.val()){
            $("h2").remove();
        select.after("<h2>You have to enter text in the input field</h2>");
        }
        else{
        select.append(`<option id="option1">${text.val()}</option>`);
         option1.val(`${text.val()}`);    
        }

    })

    text.blur(function(){
    select.after.remove();
    if(!text.val()){
        paragraph.val("You have to enter text in the input field");
    }
})

})





