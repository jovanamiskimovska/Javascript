function arrayNumbers(array) {
    let evenArray = [];
    let oddArray = [];
    for (let item of array) {
        if (isNaN(item)||item===true||item===null||item===false) {
            continue;
        }
        else {
            if (item % 2 == 0) {
                evenArray.push(item);
            }
            else {
                oddArray.push(item);
            }
        }
    }
    return{
        oddArray,
        evenArray
    };
}

arrayNumbers([5, 5, 7, 6,null, 7, 9, 10]);

arrayNumbers([5, "sedc", 7, false,undefined,6, true, 9, 10]);
