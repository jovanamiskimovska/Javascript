function numberChecks(num) {
    if (isNaN(num) || num===true || num===false ) {
        console.log("The entered item is not number");
    }
        else{
        let counter = 1;
            if (num >= 0) {
                console.log(`The number ${num} is positive`);
            }
            else {
                console.log(`The number ${num} is negative`);
            }
         
            if (num % 2 == 0) {
                console.log(`The number ${num} is even`)
            }
            else {
                console.log(`The number ${num} is odd`);
            }
        
        while (parseInt(num / 10) > 0) {
            num=parseInt(num/10);
            counter++;           
        }
        console.log(`Number of digits ${counter}`);
    }}


numberChecks("string");
numberChecks(7777);
numberChecks(-5);
numberChecks(true);
numberChecks(2222222);
numberChecks(undefined);