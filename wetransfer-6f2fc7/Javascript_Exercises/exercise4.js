function stringLargerThan10Chars(arrayString){
    for(let item of array){
        if(!item || !(isNaN(item))){
            continue;
        }
        else{
            if(item.length>10){
                return item;
                break;
            }
        }
    }
}

arrayOfString=["Hello","Beautifully","zero",7,null,"Hypothetically"];
let result=stringLargerThan10Chars(arrayOfString);
console.log(result);