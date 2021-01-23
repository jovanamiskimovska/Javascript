
let myTable=document.getElementById("sampleTable");
let tBody=myTable.children[0];
let button=document.getElementsByTagName("input")[0];

function insertRow(){
    tBody.innerHTML+="<tr><td>added cell1</td><td>added cell2</td></tr>";
}

button.addEventListener("click", function(){
   insertRow();
})