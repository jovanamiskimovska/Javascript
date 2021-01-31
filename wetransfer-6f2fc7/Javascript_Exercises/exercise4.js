function stringLargerThan10Chars(arrayString){
    let flag=false;
    for(let item of arrayString){
        if(!item || !(isNaN(item))){
            continue;
        }
    else{
            if(item.length>10){
                flag=true;
                return item;
                break;
            }
            else{
                flag=false;
            }
       
        }
    }
    if(flag==false){
       return "Neither of the strings has more than 10 characters";
    }
}

arrayOfString=["Hello","Beautifully","zero",7,null,"Hippopotamus"];
let result=stringLargerThan10Chars(arrayOfString);
console.log(result);