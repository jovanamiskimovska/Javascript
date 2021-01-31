$(document).ready(function () {

    let button = $("input");
    let options = $("option");
    let selectColor = $("#myColor");
    let h2 = $("#content");


    function printString(value) {
        h2.text(`${value}`);
        h2.css("color", `${value}`);
    }

    button.click(function () {
        options.remove();
        selectColor.append(`<option value="orange" id="option2">Orange</option>`);
        let option2 = $("#option2");
        selectColor.click(function () {
            printString(option2.val());  
            button.prop("disabled",true);
        })
      
       

    })

})





