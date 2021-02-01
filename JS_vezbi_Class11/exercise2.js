
$(document).ready(function () {

    let propertyBalance = 10000;

    let usernameInput = $("#usernameInput");
    let login = $("#login");

    let getBalance = $("#getBalance").hide();
    let numberDeposit = $("#numberDeposit").hide()
    let makeDeposit = $("#makeDeposit").hide();
    let numberWithdrawl =$ ("#numberWithdrawl").hide();
    let withdrawl = $("#withdrawl").hide();
    let exit = $("#exit").hide();

    let h2 = $("h2");

    function PersonforAtm(username) {
        this.username = username;
        this.propertyBalance;

        this.makeDeposit = function (inputValue) {
            return this.propertyBalance += parseInt(inputValue);
        }
        this.makeWithdrawl = function (inputValue) {
            return this.propertyBalance -= parseInt(inputValue);
        }
    }


    login.click(function () {
        h2.text("");
        if (!usernameInput.val()) {
            h2.text("You have to enter your username");
            return;
        }

        let person = new PersonforAtm(usernameInput.val());

        usernameInput.hide();
        login.hide();

        h2.text("Here are your options!");

        getBalance.show();
        numberDeposit.show()
        makeDeposit.show();
        numberWithdrawl.show();
        withdrawl.show();
        exit.show();
        

        getBalance.click(function () {
            return person.propertyBalance;
        })

        makeDeposit.click(function () {
            if (!numberDeposit.val()) {
                h2.text("You have to enter value");
                return;
            }
            else {
                h2.text("");
                h2.text(`${person.makeDeposit(numberDeposit.val())}`);
            }
        })

        withdrawl.click(function () {
            h2.text("");
            if (!numberWithdrawl.val()) {
                h2.text("You have to enter value");
                return;
            }
            else {
                h2.text("");
                h2.text(`${person.makeWithdrawl(numberWithdrawl.val())}`);
            }

        })

        exit.click(function () {
            h2.text("");
            usernameInput.val("");
            usernameInput.show();
            login.show();
            
            getBalance.hide();
            makeDeposit.hide();
            withdrawl.hide();
            exit.hide();
            numberDeposit.hide()
            numberWithdrawl.hide();
        })

    });


})






