
let newArray=[];

function insertDashes(numberArray){
    for(let i=0;i<numberArray.length;i++){
        if(!numberArray[i] || isNaN(numberArray[i]) ){
            continue;
        }
        else{
            if(numberArray[i]%2!=0){
                newArray.push(numberArray[i]);
            }
            else if(numberArray[i]%2==0 &&numberArray[i+1]%2==0 && i!=(numberArray.length-1) &&!!numberArray[i]){
                newArray.push(numberArray[i]);
                newArray.push("-");
                 //newArray.push(numberArray[i+1]); 
                }
                else if(numberArray[i]%2==0 && numberArray[i+1]%2!=0 || i==(numberArray.length-1)){
                    newArray.push(numberArray[i]);
                }
            }
        }
        return newArray;
    }
    


// let testArray=[1,2,4,5,6,6,8,9,10,10];
// console.log(insertDashes(testArray));


let testArray=[1,2,4,5,6,6,8,10,10,1];
console.log(insertDashes(testArray));