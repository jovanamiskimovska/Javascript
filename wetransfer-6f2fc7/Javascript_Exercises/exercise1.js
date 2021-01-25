function cleanArray(array){
    let newArray=[];
    for(let item of array){
     if(!!item)  {
         newArray.push(item);
     }
     }      
    return newArray;
}

let array1=[2,5,['a','b','c'],"sedc"];
let result=cleanArray(array1);
console.log(result);

let array2=[2,NaN,7,['a','b','c'],null,"sedc",0];
let result2=cleanArray(array2);
console.log(result2);
