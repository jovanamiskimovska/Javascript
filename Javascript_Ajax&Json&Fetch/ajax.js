$(document).ready(function () {
    let p = $("p");
    let button = $("#button");
    let number = $("#number");
    let h3 = $("h3");

    function getOneTodo(num) {
        $.ajax({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/todos/${num}`,
            success: function (chosenTodo) {
                printInfo(chosenTodo, p);
                h3.text("COMPLETED");
            },
            error: function (e) {
                h3.text("NOT COMPLETED");
            }
        })

    }

    function printInfo(result, paragraph) {
        paragraph.text(`The id of the chosen todo is: ${result.id} and its title is: "${result.title}"`);
    }

    function getValue(inputField) {
        if (!inputField.val()) {
            p.text("You need to enter a number!")
        }

        else {
            return inputField.val();
        }
    }

    button.click(function () {
        getOneTodo(getValue(number));
    })

})


